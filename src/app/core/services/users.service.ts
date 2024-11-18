import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { User } from '../../features/dashboard/users/models';
import { concatMap, forkJoin, map, Observable, switchMap } from 'rxjs';
import { generateRandomID } from '../../shared/utils';
import { RegisterCourse } from '../../features/dashboard/register-course/models';
import { Course } from '../../features/dashboard/courses/models/course';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = environment.baseURL;

  private users: User[] = [];

  constructor(private _httpClient: HttpClient) { }

  getUserById(id: string): Observable<User> {
    return this._httpClient.get<User>(`${this.baseURL}/users/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(`${this.baseURL}/users`);
  }

  createUser(data: Omit<User, 'id'>): Observable<User> {
    return this._httpClient.post<User>(`${this.baseURL}/users`, {
      ...data,
      role: 'USER',
      password: generateRandomID(10).toString(),
      token: generateRandomID(10).toString(),
      createdAt: new Date().toISOString(),
    });
  }

  removeUserById(id: string): Observable<User[]> {
    return this._httpClient
      .delete<User>(`${this.baseURL}/users/${id}`)
      .pipe(concatMap(() => this.getUsers()));
  }

  updateUserById(update: Partial<User>) {
    return this._httpClient
      .patch<User>(`${this.baseURL}/users/${update.id}`, update)
      .pipe(concatMap(() => this.getUsers()));
  }

  getUserCourses(userId: string): Observable<Course[]> {
    
    return this._httpClient
      .get<RegisterCourse[]>(`${this.baseURL}/registerCourse?userId=${userId}`)
      .pipe(
        switchMap((registrations: RegisterCourse[]) => {
          const courseIds = registrations.map((reg) => reg.courseId);
          const courseRequests = courseIds.map((courseId) =>
            this._httpClient.get<Course>(`${this.baseURL}/courses/${courseId}`)
          );
          return forkJoin(courseRequests);
        })
      );
  }


}
