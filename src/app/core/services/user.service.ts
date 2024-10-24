import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { USERS_URL } from '../providers';
import { User } from '../../features/dashboard/users/models';
import { HttpClient } from '@angular/common/http';
import { generateRandomString } from '../../shared/utils';


let DATABASE: User[] = [
  {
    id: 5,
    firstName: 'Goku',
    lastName: 'Son',
    createdAt: new Date(),
    password: '123456',
    email: 'gokussj3@gmail.com',
    token: generateRandomString(20),
  },
];
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

  updateUserById(id: string, update: Partial<User>) {
    DATABASE = DATABASE.map((user) =>
      user.id.toString() === id ? { ...user, ...update } : user
    );

    return new Observable<User[]>((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 1000);
    });
  }

  removeUserById(id: string): Observable<User[]> {
    DATABASE = DATABASE.filter((user) => user.id.toString() != id);
    return of(DATABASE).pipe(delay(1000));
  }
}
