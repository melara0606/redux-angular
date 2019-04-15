import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IngresoEgresoService } from 'src/app/ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private ingresoEgresoService: IngresoEgresoService,
  ) { }

  logout() {
    this.authService.logout()
      .then(e => {
        this.router.navigate(['login']);
        this.ingresoEgresoService.onCancelarSubscription();
      });
  }

}
