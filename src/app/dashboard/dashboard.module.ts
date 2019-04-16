import { AuthGuardService } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: DashboardRoutes,
    component: DashboardComponent,
    canLoad: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DashboardModule { }
