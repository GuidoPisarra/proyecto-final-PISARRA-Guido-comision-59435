import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Clase } from '../../features/dashboard/clases/models/clase';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  private clases: Clase[] = [];
  private baseURL = environment.baseURL;

  constructor(
    private _httpClient: HttpClient

  ) { }

  getClases(courseId: string): Observable<Clase[]> {
    return this._httpClient
      .get<Clase[]>(`${this.baseURL}/clases?courseId=${courseId}`)
      .pipe(
        tap((clases) => {
          this.clases = clases;
        })
      );
  }

  addClass(clase: Partial<Clase>): Observable<Clase> {
    return this._httpClient.post<Clase>(`${this.baseURL}/clases`, clase).pipe();
  }


  updateClassById(id: string, update: Partial<Clase>): Observable<Clase[]> {
    return this._httpClient.patch<Clase>(`${this.baseURL}/clases/${update.id}?courseId=${id}`, update).pipe(
      tap((updatedClass) => {
        this.clases = this.clases.map(clase =>
          clase.id.toString() === id ? { ...clase, ...updatedClass } : clase
        );
      }),
      switchMap(() => this._httpClient.get<Clase[]>(`${this.baseURL}/clases?courseId=${id}`)),
      tap((allClases) => {
        this.clases = allClases;
      })
    );
  }

  deleteClassById(courseId: string, id: string): Observable<Clase[]> {
    return this._httpClient.delete<void>(`${this.baseURL}/clases/${id}?courseId=${courseId}`).pipe(
      tap(() => {
        this.clases = this.clases.filter(clase => clase.id !== id || clase.courseId !== courseId);
      }),
      switchMap(() => this._httpClient.get<Clase[]>(`${this.baseURL}/clases?courseId=${courseId}`)),
      tap((allClases) => {
        this.clases = allClases;
      })
    );
  }


}
