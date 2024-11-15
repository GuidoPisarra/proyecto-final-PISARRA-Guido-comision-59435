import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { User } from '../../features/dashboard/users/models';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseURL = environment.baseURL;

  private users: User[] = [];

  constructor(private _httpClient: HttpClient) { }

}
