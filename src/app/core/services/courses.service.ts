import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { COURSES_URL } from '../providers';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../features/dashboard/courses/models/course';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: Course[] = [];
  private baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient

  ) { }

  getCourses(): Observable<Course[]> {
    return this._httpClient
      .get<Course[]>(
        `${this.baseURL}/courses`
      )
      .pipe(
        tap((courses: Course[]) => this.courses = courses)
      );
  }

  addCourse(course: Course): Observable<Course> {
    return this._httpClient.post<Course>(`${this.baseURL}/courses`, course).pipe(
      tap((newCourse: Course) => this.courses = [...this.courses, newCourse])
    );
  }

  updateCourseById(id: string, update: Partial<Course>) {
    this.courses = this.courses.map(course =>
      course.id.toString() === id ? { ...course, ...update } : course
    );
    return of(this.courses);
  }

  deleteCourseById(id: string): Observable<Course[]> {
    return this._httpClient.delete<void>(`${this.baseURL}/courses/${id}`).pipe(
      tap(() => {
        this.courses = this.courses.filter((course) => course.id.toString() !== id);
      }),
      switchMap(() => of(this.courses))
    );
  }

}
