import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout()
      .then(e => {
        this.router.navigate(['login']);
      });
  }

}
