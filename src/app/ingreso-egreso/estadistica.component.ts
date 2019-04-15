import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Label } from 'ng2-charts';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: []
})
export class EstadisticaComponent implements OnInit, OnDestroy {
  public pieChartData: number[] = [];
  public pieChartLabels: Label[] = ['Ingresos', 'Egresos'];

  public egresos: number;
  public ingresos: number;

  public ingresoTotal: number;
  public egresoTotal: number;

  private subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>
  ) {
    this.subscription = this.store.select('ingresoEgreso').subscribe((ingresoEgreso) => {
      this.onCalculoEstadistica(ingresoEgreso.items);
    });
  }

  ngOnInit() {
  }

  private onCalculoEstadistica(items: any[]) {
    this.egresos = 0;
    this.ingresos = 0;

    this.ingresoTotal = 0;
    this.egresoTotal = 0;

    items.forEach(item => {
      if (item.tipo === 'ingreso') {
        this.ingresos++;
        this.ingresoTotal += item.monto;
      } else {
        this.egresos++;
        this.egresoTotal += item.monto;
      }
    });

    this.pieChartData = [this.ingresoTotal, this.egresoTotal];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
