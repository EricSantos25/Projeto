import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documento } from '../domain/documentoClass';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DocumentoService {
  URL = 'http://localhost:3000/documento';

  constructor (private http: HttpClient) {}

  listar(){
      return this.http.get<any[]>(`${this.URL}`)
  }

  adicionar(dados: Documento): Observable<any> {
    return this.http.post(`${this.URL}`, dados);
  }
}
