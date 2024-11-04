import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { USERS_URL } from '../providers';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../features/dashboard/students/models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[] = [];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Student[]> {
    return this.http.get<Student[]>(USERS_URL.useValue).pipe(
      tap((students: Student[]) => this.students = students)
    );
  }

  updateUserById(id: string, update: Partial<Student>) {
    this.students = this.students.map(student =>
      student.id.toString() === id ? { ...student, ...update } : student
    );
    return of(this.students);
  }

  deleteUserById(id: string): Observable<Student[]> {
    this.students = this.students.filter((student) => student.id.toString() != id);
    return of(this.students);
  }
}
