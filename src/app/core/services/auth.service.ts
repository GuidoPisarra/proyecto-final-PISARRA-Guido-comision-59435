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
    if (students.length > 0) {
      const student = students[0];
      this.store.dispatch(AuthActions.setAuthenticatedStudent({ student }));
      localStorage.setItem('token', student.token);
      return student;
    }
    return null;
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    const isValid = !!token;
    return of(isValid);
  }

  getUserRole(): Observable<string> {
    return this.authStudent$.pipe(
      map((student) => student?.role || 'user')
    );
  }

  logout() {
    this.store.dispatch(AuthActions.unsetAuthenticatedStudent());
    localStorage.removeItem('token');
    this._authStudent$.next(null);
    this.router.navigate(['auth', 'login']);
  }
}
