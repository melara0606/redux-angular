import { AuthService } from 'src/app/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private authService: AuthService) { }

  canActivate() {
    return this.authService.isLoggind();
  }

  canLoad() {
    return this.authService.isLoggind().pipe(
      take(1)
    );
  }
}
