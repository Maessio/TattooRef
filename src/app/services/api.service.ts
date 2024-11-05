import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageInterface } from '../interfaces/image-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API = 'https://rickandmortyapi.com/api'
  // private http = inject(HttpClient)

  constructor(private http: HttpClient) {}


  get(prompt: string): Observable<ImageInterface>{
    return this.http.get<ImageInterface>(`${this.API}/character/${prompt}`);
  }

  list(): Observable<String[]> {
    return this.http.get<String[]>(`${this.API}/character`);
  }
  

}
