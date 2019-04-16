import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { IngreoEgresoOrdenPipe } from './ingreo-egreso-orden.pipe';
import { DetalleComponent } from './detalle.component';
import { EstadisticaComponent } from './estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    IngreoEgresoOrdenPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    ChartsModule,
    DashboardModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    IngreoEgresoOrdenPipe
  ]
})
export class IngresoEgresoModule { }
