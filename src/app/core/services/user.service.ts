import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { USERS_URL } from '../providers';
import { User } from '../../features/dashboard/users/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient

  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USERS_URL.useValue);

  }
}
