import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../features/dashboard/users/models';
import { AuthData } from '../../features/auth/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/actions/auth.actions';
import { selectAutheticatedUser } from '../../store/selectors/auth.selector';


const FAKE_USER: User = {
  email: 'admin@mail.com',
  firstName: 'admin',
  lastName: 'admin',
  id: 111,
  createdAt: new Date(),
  password: '123456',
  token: 'abcdefghiasdasdasdlsadsalasdasfdsfsdf103232',
};


@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<null | User>(null);

  public authUser$ = this._authUser$.asObservable();

  private baseURL = environment.baseURL;


  constructor(
    private router: Router,
    private _httpClient: HttpClient,
    private store: Store
  ) {
    this.authUser$ = this.store.select(selectAutheticatedUser);

  }

  login(data: AuthData): Observable<User> {
    return this._httpClient
      .get<User[]>(
        `${this.baseURL}/users?email=${data.email}&password=${data.password}`
      )
      .pipe(
        map((users) => {
          const user = this.handleAuthentication(users);
          if (user) {
            return user;
          } else {
            throw new Error('Los datos son invalidos');
          }
        }),
        catchError(() => throwError(() => new Error('Los datos son invalidos')))

      );
  }

  private handleAuthentication(users: User[]): User | null {
    if (!!users[0]) {
      this.store.dispatch(AuthActions.setAuthenticatedUser({ user: users[0] }));
      localStorage.setItem('token', users[0].token);
      return users[0];
    } else {
      return null;
    }
  }

  verifyToken(): Observable<boolean> {
    const isValid = localStorage.getItem('token') === FAKE_USER.token;
    if (isValid) {
      this._authUser$.next(FAKE_USER);
    } else {
      this._authUser$.next(null);
    }
    return of(isValid);
  }


  logout() {
    this.store.dispatch(AuthActions.unsetAuthenticatedUser());
    localStorage.removeItem('token');
    this.authUser$ = of(null);
    this.router.navigate(['auth', 'login']);
  }

}
