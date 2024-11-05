import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clase } from '../../features/dashboard/clases/models/clase';
import { CLASES_URL } from './../providers/index';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  private clases: Clase[] = [];
  private baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient,

  ) { }

  getClases(): Observable<Clase[]> {
    return this._httpClient
      .get<Clase[]>(
        `${this.baseURL}/clases`
      )
      .pipe(
        tap((clases: Clase[]) => this.clases = clases)
      );
  }

  updateClaseById(id: string, update: Partial<Clase>) {
    this.clases = this.clases.map(clase =>
      clase.classId.toString() === id ? { ...clase, ...update } : clase
    );
    return of(this.clases);
  }


  deleteClassById(classId: number): Observable<Clase[]> {
    this.clases = this.clases.filter((clase) => clase.classId != classId);
    return of(this.clases);
  }

  getClasesById(id: number): Observable<Clase[]> {
    return this._httpClient.get<Clase[]>(`${this.baseURL}/clases`).pipe(
      map((clases: Clase[]) => clases.filter(clase => clase.courseId === id)),
      tap((filteredClases: Clase[]) => {
        this.clases = filteredClases;
      })
    );
  }


}
