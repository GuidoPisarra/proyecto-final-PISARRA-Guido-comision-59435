import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Inject } from '@angular/core';
import { map } from 'rxjs'

export const authGuard: CanActivateFn = (route, state) => {
  const _authService = Inject(AuthService);
  const router = Inject(Router);

  return _authService
    .verifyToken()
    .pipe(map((isValid) => isValid || router.createUrlTree(['auth', 'login'])));
};
