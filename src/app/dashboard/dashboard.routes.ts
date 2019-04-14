import { Routes } from '@angular/router';

import { DetalleComponent } from './../ingreso-egreso/detalle.component';
import { EstadisticaComponent } from './../ingreso-egreso/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';

export const DashboardRoutes: Routes = [
  { path: '', component: EstadisticaComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'ingreso-egreso', component: IngresoEgresoComponent },
];
