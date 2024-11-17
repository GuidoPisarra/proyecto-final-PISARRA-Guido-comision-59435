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
    return this._httpClient.post<Clase>(`${this.baseURL}/clases`, clase).pipe(
      tap((newClase: Clase) => (this.clases = [...this.clases, newClase]))
    );
  }

  updateClassById(id: string, update: Partial<Clase>): Observable<Clase[]> {
    return this._httpClient.patch<Clase>(`${this.baseURL}/clases/${update.id}?courseId=${id}`, update).pipe(
      tap((updatedClass) => {
        this.clases = this.clases.map(clase =>
          clase.id.toString() === id ? { ...clase, ...updatedClass } : clase
        );
        console.log('Clases actualizadas localmente:', this.clases);
      }),
      switchMap(() => this._httpClient.get<Clase[]>(`${this.baseURL}/clases?courseId=${id}`)),
      tap((allClases) => {
        this.clases = allClases;
        console.log('Todas las clases del curso:', this.clases);
      })
    );
  }



  deleteClassById(id: string, courseId: string): Observable<Clase[]> {
    return this._httpClient.delete<void>(`${this.baseURL}/clases/${id}?courseId=${courseId}`).pipe(
      switchMap(() => {
        this.clases = this.clases.filter(clase =>
          clase.id !== id || clase.courseId !== courseId
        );
        return of(this.clases);
      })
    );
  }


}
