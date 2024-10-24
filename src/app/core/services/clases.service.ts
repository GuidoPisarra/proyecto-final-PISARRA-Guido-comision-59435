import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { COURSES_URL } from '../providers';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../features/dashboard/courses/models/course';
import { Clase } from '../../features/dashboard/clases/models/clase';
import { CLASES_URL } from './../providers/index';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {


  constructor(
    private http: HttpClient

  ) { }

  getClases(): Observable<Clase[]> {
    return this.http.get<Clase[]>(COURSES_URL.useValue);

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

  getClasesById(id: number): Observable<Clase[]> {
    return this.http.get<Clase[]>(CLASES_URL.useValue)
      .pipe(
        map((clases: Clase[]) => clases.filter(clase => clase.courseId === id))
      );

  }
}
