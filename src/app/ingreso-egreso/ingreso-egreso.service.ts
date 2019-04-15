import { SetItemsActions, UnSetItemsActions } from './ingreso-egreso.actions';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { IngresoEgreso } from '../models/IngresoEgreso';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

import { map, filter } from 'rxjs/operators';
import { AppState } from '../app.reducers';
import { Subscription } from 'rxjs';
import { SetAuthActions } from '../auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  public ingresoEgresoSubcription: Subscription = new Subscription();

  constructor(
    private afbFirestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  initialIngresoEgreso() {
    this.ingresoEgresoSubcription = this.afAuth.authState
      .pipe(filter(user => user != null))
      .subscribe((afbUser: User) => {
        this.afbFirestore
          .collection(`${afbUser.uid}/ingreso-egreso/items`)
          .snapshotChanges()
          .pipe(
            map((items) => (
              items.map(item => (
                {
                  id: item.payload.doc.id,
                  ...item.payload.doc.data()
                }
              ))
            ))
          )
          .subscribe(items => {
            this.ingresoEgresoRoute(items);
          });
      });
  }

  private ingresoEgresoRoute(items: any) {
    this.store.dispatch( new SetItemsActions(items));
  }

  crearIngresoEgreso(object: IngresoEgreso) {
    const usuario = this.authService.getUsuario();
    return this.afbFirestore.doc(`${usuario.uid}/ingreso-egreso`)
      .collection('items').add({ ...object });
  }

  deleteIngresoEgreso(uid: string) {
    const usuario = this.authService.getUsuario();
    return this.afbFirestore.doc(`${ usuario.uid }/ingreso-egreso/items/${ uid }`)
      .delete();
  }

  onCancelarSubscription() {
    this.ingresoEgresoSubcription.unsubscribe();
    this.store.dispatch( new UnSetItemsActions() );
    this.store.dispatch( new SetAuthActions(null) );
  }
}
