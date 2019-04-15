import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../app.reducers';
import { IngresoEgreso } from '../models/IngresoEgreso';
import { IngresoEgresoService } from './ingreso-egreso.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {
  public items: IngresoEgreso[];
  public subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private ingresoEgresoService: IngresoEgresoService
  ) {
    this.subscription = this.store.select('ingresoEgreso').subscribe((ingresoEgreso: any) => {
      this.items = ingresoEgreso.items;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  eliminarElemento(item: any) {
    this.ingresoEgresoService.deleteIngresoEgreso(item.id)
      .then(() => {
        Swal.fire({
          title: 'Eliminado',
          text: item.description,
          type: 'success'
        });
      });
  }

}
