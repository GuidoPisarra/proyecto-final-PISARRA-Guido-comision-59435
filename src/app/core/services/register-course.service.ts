import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Course } from '../../features/dashboard/courses/models/course';
import { RegisterCourse } from '../../features/dashboard/register-course/models';

@Injectable({
  providedIn: 'root'
})
export class RegisterCourseService {
  private baseURL = environment.baseURL;


  constructor(private _httpClient: HttpClient) { }



  getRegisteredCourses(): Observable<RegisterCourse[]> {
    return this._httpClient.get<RegisterCourse[]>(
      `${environment.baseURL}/register-course?_embed=user&_embed=product`
    );
  }

  createRegisterCourse(payload: Omit<RegisterCourse, 'id' | 'user' | 'course'>): Observable<RegisterCourse> {
    return this._httpClient.post<RegisterCourse>(
      `${environment.baseURL}/register-course`,
      payload
    );
  }
}
