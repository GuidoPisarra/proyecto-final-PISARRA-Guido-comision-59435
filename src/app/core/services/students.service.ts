import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../features/dashboard/students/models';
import { environment } from '../../../environments/environment.development';
import { Course } from '../../features/dashboard/courses/models/course';
import { RegisterCourse } from '../../features/dashboard/register-course/models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseURL = environment.baseURL;

  private students: Student[] = [];

  constructor(private _httpClient: HttpClient) { }


  getStudents(): Observable<Student[]> {
    return this._httpClient
      .get<Student[]>(`${this.baseURL}/students`)
      .pipe(
        map((students: Student[]) =>
          students.filter(student => student.role !== 'admin')
        ),
        tap((students: Student[]) => this.students = students)
      );
  }


  addStudent(student: Student): Observable<Student> {
    return this._httpClient.post<Student>(`${this.baseURL}/students`, student).pipe(
      tap((newStudent: Student) => this.students = [...this.students, newStudent])
    );
  }

  updateStudentById(id: string, update: Partial<Student>): Observable<Student[]> {
    return this._httpClient.patch<Student>(`${this.baseURL}/students/${id}`, update).pipe(
      tap((updatedStudent) => {
        this.students = this.students.map(student =>
          student.id.toString() === id ? { ...student, ...updatedStudent } : student
        );
      }),
      switchMap(() => of(this.students))
    );
  }


  deleteStudentById(id: string): Observable<Student[]> {
    return this._httpClient.delete<void>(`${this.baseURL}/students/${id}`).pipe(
      tap(() => {
        this.students = this.students.filter((student) => student.id.toString() !== id);
      }),
      switchMap(() => of(this.students))
    );
  }

  getStudentCourses(studentId: string): Observable<Course[]> {
    return this._httpClient
      .get<any[]>(`${this.baseURL}/registerCourse`)
      .pipe(
        map((registrations: RegisterCourse[]) => {
          const studentRegistrations = registrations.filter(
            (registration) => registration.userId === studentId
          );
          const courseIds = studentRegistrations.map((registration) => registration.courseId);
          return courseIds;
        }),
        switchMap((courseIds: string[]) => {
          const requests = courseIds.map(courseId =>
            this._httpClient.get<Course>(`${this.baseURL}/courses/${courseId}`)
          );
          return forkJoin(requests);
        })
      );
  }

  removeCourse(user: string, course: string): Observable<Course[]> {
    return this._httpClient
      .get<RegisterCourse[]>(`${this.baseURL}/registerCourse?userId=${user}&courseId=${course}`)
      .pipe(
        switchMap((registrations) => {
          const recordId = registrations[0].id;
          return this._httpClient.delete(`${this.baseURL}/registerCourse/${recordId}`);
        }),
        switchMap(() =>
          this._httpClient.get<RegisterCourse[]>(`${this.baseURL}/registerCourse?userId=${user}`)
        ),
        switchMap((registrations: RegisterCourse[]) => {
          if (registrations.length === 0) {
            return of([]);
          }
          const courseIds = registrations.map((reg) => reg.courseId);
          const courseRequests = courseIds.map((courseId) =>
            this._httpClient.get<Course>(`${this.baseURL}/courses/${courseId}`)
          );
          return forkJoin(courseRequests);
        }),

      );
  }

  removeStudentFromCourse(userId: string, courseId: string): Observable<Student[]> {
    return this._httpClient
      .get<RegisterCourse[]>(`${this.baseURL}/registerCourse?userId=${userId}&courseId=${courseId}`)
      .pipe(
        switchMap((registrations) => {
          const recordId = registrations[0].id; // Asegúrate de manejar casos donde no haya registros
          return this._httpClient.delete(`${this.baseURL}/registerCourse/${recordId}`);
        }),
        switchMap(() =>
          this._httpClient.get<RegisterCourse[]>(`${this.baseURL}/registerCourse?courseId=${courseId}`)
        ),
        switchMap((registrations) => {
          if (registrations.length === 0) {
            return of([]);
          }
          const studentIds = registrations.map((reg) => reg.userId);
          const studentRequests = studentIds.map((id) =>
            this._httpClient.get<Student>(`${this.baseURL}/students/${id}`)
          );
          return forkJoin(studentRequests);
        })
      );
  }

}
