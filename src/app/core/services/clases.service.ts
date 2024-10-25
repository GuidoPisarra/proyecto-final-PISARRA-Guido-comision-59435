import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { COURSES_URL } from '../providers';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../features/dashboard/courses/models/course';
import { Clase } from '../../features/dashboard/clases/models/clase';
import { CLASES_URL } from './../providers/index';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  private clases: Clase[] = [];

  constructor(
    private http: HttpClient

  ) { }

  getClases(): Observable<Clase[]> {
    return this.http.get<Clase[]>(CLASES_URL.useValue).pipe(
      tap((clases: Clase[]) => this.clases = clases)
    );
  }

  updateClaseById(id: string, update: Partial<Clase>) {
    this.clases = this.clases.map(clase =>
      clase.classId.toString() === id ? { ...clase, ...update } : clase
    );
    return of(this.clases);
  }

  deleteClassById(id: number): Observable<Clase[]> {
    this.clases = this.clases.filter((clase) => clase.classId != id);
    return of(this.clases);
  }

  getClasesById(id: number): Observable<Clase[]> {
    return this.http.get<Clase[]>(CLASES_URL.useValue)
      .pipe(
        map((clases: Clase[]) => clases.filter(clase => clase.courseId === id))
      );

  }
}
