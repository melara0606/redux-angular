import { Subscription } from 'rxjs';
import { ActivarActions, DesactivarActions } from './../shared/ui.actions';
import { AppState } from './../app.reducers';
import { IngresoEgreso } from './../models/IngresoEgreso';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngresoEgresoService } from './ingreso-egreso.service';

import Sweetalert from 'sweetalert2';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  public forma: FormGroup;
  public tipo = 'ingreso';
  public cargando: boolean;

  private subscription: Subscription = new Subscription();

  constructor(
    private ingresoEgresoService: IngresoEgresoService,
    private store: Store<AppState>
  ) {
    this.cargando = false;
    this.subscription =  this.store.select('ui').subscribe((ui) => {
      this.cargando = ui.loading;
    });
  }

  ngOnInit() {
    this.forma = new FormGroup({
      description: new FormControl('', Validators.required),
      monto: new FormControl(0, Validators.min(0))
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  crearIngresoEgreso() {
    this.store.dispatch( new ActivarActions() );
    const ingresoEgreso = new IngresoEgreso({ ...this.forma.value, tipo: this.tipo });
    this.ingresoEgresoService.crearIngresoEgreso(ingresoEgreso)
      .then(() => {
        Sweetalert.fire({
          title: 'Todo excelente',
          text: 'Elemento creado con exito',
          type: 'success'
        });
        this.store.dispatch(new DesactivarActions());
        this.forma.reset({
          monto: 0
        });
      }).catch((err) => {
        console.error(err);
      });

    return false;
  }
}
