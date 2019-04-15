import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// Librerias externas
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

// Archivos personales
import { AppState } from './../../app.reducers';
import { AuthService } from './../auth.service';
import { Usuario } from '../../models/Usuario';
import { SetAuthActions } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private subcription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private fbStore: AngularFirestore,
    private router: Router) { }

  loginUsuario(f: NgForm) {
    const { email, password } = f.value;

    this.authService.loginUsuario(email, password)
      .then(fbUser => {
        if (fbUser) {
          const { uid } = fbUser.user;
          this.subcription = this.fbStore.doc(`${uid}/usuario`).valueChanges().subscribe((user: any) => {
            this.store.dispatch(new SetAuthActions(new Usuario(user)));
            this.router.navigate(['']);
          });
        } else {
          this.subcription.unsubscribe();
        }
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          type: 'error',
          confirmButtonText: 'Cool'
        });

        f.reset({
          email
        });
      });
  }
}
