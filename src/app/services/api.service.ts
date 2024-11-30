import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageInterface } from '../interfaces/image-interface';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'https://rickandmortyapi.com/api'
  private http = inject(HttpClient)

  get(prompt: string): Observable<ImageInterface>{
    return this.http.get<ImageInterface>(`${this.API}/character/${prompt}`);
  }

  list(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.API}/character`);
  }
  

}
