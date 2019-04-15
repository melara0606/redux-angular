import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// Librerias externas
import Swal from 'sweetalert2'
import { format } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  loginUsuario(f: NgForm) {
    const { email, password } = f.value;

    this.authService.loginUsuario(email, password)
      .then(response => this.router.navigate(['']) )
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          type: 'error',
          confirmButtonText: 'Cool'
        });

        f.reset({
          email
        });
      });
  }
}
