import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  initialStatus() {
    this.afAuth.authState.subscribe((fbUser: User) => {
      this.user = fbUser;
    });
  }

  crearUsuario(nombre: string, email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUsuario(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  isLoggind() {
    return this.afAuth.authState.pipe(
      map(fbUser => {
        if (fbUser == null) {
          this.router.navigate(['/login']);
        }
        return fbUser != null;
      })
    );
  }

  getUsuario(): User {
    return this.user;
  }
}
