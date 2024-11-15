import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const requiredRoles = route.data['roles'] as string[];

    return this.authService.verifyToken().pipe(
      switchMap((isValid) => {
        if (!isValid) {
          this.router.navigate(['auth', 'login']);
          return [false];
        }

        return this.authService.getUserRole().pipe(
          map((role) => {
            if (requiredRoles.includes(role)) {
              return true;
            } else {
              this.router.navigate(['auth']);
              return false;
            }
          })
        );
      })
    );
  }
}
