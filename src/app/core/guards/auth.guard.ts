import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { inject } from '@angular/core';
import { map, switchMap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  return _authService.verifyToken().pipe(
    switchMap((isValid) => {
      if (!isValid) {
        return router.navigate(['auth', 'login']);
      }

      return _authService.getUserRole().pipe(
        map((role) =>
          role === 'admin' || role === 'user'
            ? true
            : false
        )
      );
    })
  );
};
