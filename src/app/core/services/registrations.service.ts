import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  private baseURL = environment.baseURL;


  constructor(private _httpClient: HttpClient) { }

}
