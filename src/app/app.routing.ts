import { AuthGuardService } from './auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: DashboardRoutes, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
