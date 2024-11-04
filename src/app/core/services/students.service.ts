import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../features/dashboard/students/models';
import { STUDENTS_URL } from '../providers';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[] = [];

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(STUDENTS_URL.useValue).pipe(
      tap((students: Student[]) => this.students = students)
    );
  }

  updateStudentById(id: string, update: Partial<Student>) {
    this.students = this.students.map(student =>
      student.id.toString() === id ? { ...student, ...update } : student
    );
    return of(this.students);
  }

  deleteStudentById(id: string): Observable<Student[]> {
    this.students = this.students.filter((student) => student.id.toString() != id);
    return of(this.students);
  }
}
