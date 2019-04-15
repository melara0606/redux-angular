import { AuthService } from 'src/app/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) { }

  canActivate() {
    return this.authService.isLoggind();
  }
}
