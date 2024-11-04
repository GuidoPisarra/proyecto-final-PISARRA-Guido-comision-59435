import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { COURSES_URL } from '../providers';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../features/dashboard/courses/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [];

  constructor(
    private http: HttpClient

  ) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(COURSES_URL.useValue).pipe(
      tap((courses: Course[]) => this.courses = courses)
    );
  }

  updateCourseById(id: string, update: Partial<Course>) {
    this.courses = this.courses.map(course =>
      course.id.toString() === id ? { ...course, ...update } : course
    );
    return of(this.courses);
  }

  deleteCourseById(id: string): Observable<Course[]> {
    this.courses = this.courses.filter((course) => course.id.toString() != id);
    return of(this.courses);
  }
}
