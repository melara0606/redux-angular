import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public nombre: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const { email } = this.authService.getUsuario();
    this.nombre = email;
  }
}
