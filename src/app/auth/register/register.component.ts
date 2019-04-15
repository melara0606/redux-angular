import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from '../auth.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(
    private authService: AuthService,
    private afDB: AngularFirestore,
    private router: Router) { }

  onSubmit(f: NgForm) {
    const { nombre, correo, password } = f.value;
    this.authService.crearUsuario(nombre, correo, password)
      .then(response => {

        const user: Usuario = {
          nombre,
          email: response.user.email,
          uid: response.user.uid
        };

        this.afDB.doc(`${ user.uid }/usuario`)
          .set(user)
          .then((result) => {
            this.router.navigate(['']);
          }).catch((err) => console.error(err));
        this.router.navigate(['/']);
      })
      .catch(error => console.error(error));
  }
}
