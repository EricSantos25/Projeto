import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DocumentoService {
  URL = 'http://localhost:3000/documento';

  constructor (private http: HttpClient) {}

  lista(){
      return this.http.get<any[]>(`${this.URL}`)
  }
}
