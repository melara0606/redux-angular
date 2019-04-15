import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Ngrx-store
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Routes app
import { AppRoutingModule } from './app.routing';

// Chart.js

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica.component';
import { DetalleComponent } from './ingreso-egreso/detalle.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { environment } from 'src/environments/environment';
import { IngreoEgresoOrdenPipe } from './ingreso-egreso/ingreo-egreso-orden.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    IngreoEgresoOrdenPipe
  ],
  imports: [
    FormsModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
