import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../features/dashboard/courses/models/course';
import { environment } from '../../../environments/environment.development';
import { Student } from '../../features/dashboard/students/models';
import { RegisterCourse } from '../../features/dashboard/register-course/models';

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
      .get<Course[]>(`${this.baseURL}/courses`)
      .pipe(
        tap((courses: Course[]) => this.courses = courses)
      );
  }

  addCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this._httpClient.post<Course>(`${this.baseURL}/courses`, course).pipe();
  }

  updateCourseById(id: string, update: Partial<Course>): Observable<Course[]> {
    return this._httpClient.patch<Course>(`${this.baseURL}/courses/${id}`, update).pipe(
      tap((updatedCourse) => {
        this.courses = this.courses.map(course =>
          course.id.toString() === id ? { ...course, ...updatedCourse } : course
        );
      }),
      switchMap(() => of(this.courses))
    );
  }

  deleteCourseById(id: string): Observable<Course[]> {
    return this._httpClient.delete<void>(`${this.baseURL}/courses/${id}`).pipe(
      tap(() => {
        this.courses = this.courses.filter((course) => course.id.toString() !== id);
      }),
      switchMap(() => of(this.courses))
    );
  }

  getStudentsOfCourse(courseId: string): Observable<Student[]> {
    return this._httpClient
      .get<RegisterCourse[]>(`${this.baseURL}/registerCourse`)
      .pipe(
        map((registrations: RegisterCourse[]) => {
          const courseRegistrations = registrations.filter(
            (registration) => registration.courseId === courseId
          );
          const studentIds = courseRegistrations.map((registration) => registration.userId);
          return studentIds;
        }),
        switchMap((studentIds: string[]) => {
          const requests = studentIds.map(studentId =>
            this._httpClient.get<Student>(`${this.baseURL}/students/${studentId}`).pipe(
            )
          );
          return forkJoin(requests);
        }),
      );
  }


}
