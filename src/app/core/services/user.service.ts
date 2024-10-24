import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { USERS_URL } from '../providers';
import { User } from '../../features/dashboard/users/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USERS_URL.useValue).pipe(
      tap((users: User[]) => this.users = users)
    );
  }

  updateUserById(id: string, update: Partial<User>) {
    this.users = this.users.map(user =>
      user.id.toString() === id ? { ...user, ...update } : user
    );
    return of(this.users);
  }

  deleteUserById(id: string): Observable<User[]> {
    this.users = this.users.filter((user) => user.id.toString() != id);
    return of(this.users);
  }
}
