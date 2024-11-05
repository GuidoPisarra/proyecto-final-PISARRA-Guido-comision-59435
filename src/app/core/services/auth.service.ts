import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthData } from '../../features/auth/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../store/actions/auth.actions';
import { Student } from '../../features/dashboard/students/models';
import { selectAutheticatedStudent } from '../../store/selectors/auth.selector';


const FAKE_STUDENT: Student = {
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
  private _authStudent$ = new BehaviorSubject<null | Student>(null);

  public authStudent$ = this._authStudent$.asObservable();

  private baseURL = environment.baseURL;


  constructor(
    private router: Router,
    private _httpClient: HttpClient,
    private store: Store
  ) {
    this.authStudent$ = this.store.select(selectAutheticatedStudent);

  }

  login(data: AuthData): Observable<Student> {
    return this._httpClient
      .get<Student[]>(
        `${this.baseURL}/students?email=${data.email}&password=${data.password}`
      )
      .pipe(

        map((students) => {
          const student = this.handleAuthentication(students);
          if (student) {
            return student;
          } else {
            throw new Error('Los datos son inválidos');
          }
        }),

        catchError(() => throwError(() => new Error('Los datos son inválidos')))
      );
  }


  private handleAuthentication(students: Student[]): Student | null {
    if (!!students[0]) {
      this.store.dispatch(AuthActions.setAuthenticatedStudent({ student: students[0] }));
      localStorage.setItem('token', students[0].token);
      return students[0];
    } else {
      return null;
    }
  }

  verifyToken(): Observable<boolean> {
    const isValid = localStorage.getItem('token') === FAKE_STUDENT.token;
    if (isValid) {
      this._authStudent$.next(FAKE_STUDENT);
    } else {
      this._authStudent$.next(null);
    }
    return of(isValid);
  }


  logout() {
    this.store.dispatch(AuthActions.unsetAuthenticatedStudent());
    localStorage.removeItem('token');
    this.authStudent$ = of(null);
    this.router.navigate(['auth', 'login']);
  }

}
