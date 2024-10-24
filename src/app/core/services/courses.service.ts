import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES_URL } from '../providers';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../features/dashboard/courses/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(
    private http: HttpClient

  ) { }

  getUsers(): Observable<Course[]> {
    return this.http.get<Course[]>(COURSES_URL.useValue);

  }

  updateCourseById(id: string, update: Partial<Course>) {
    /* DATABASE = DATABASE.map((user) =>
      user.id.toString() === id ? { ...user, ...update } : user
    );

    return new Observable<User[]>((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 1000);
    }); */
  }

  removeUserById(id: string): void/*  Observable<User[]> */ {
    /*  DATABASE = DATABASE.filter((user) => user.id.toString() != id);
     return of(DATABASE).pipe(delay(1000)); */
  }
}
