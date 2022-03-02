import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../domain/cadastroClass';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
    })

    export class CadastroService {
    URL = 'http://localhost:3000/cadastro';

    constructor (private http: HttpClient) {}

    listar(){
      return this.http.get<any[]>(`${this.URL}`)
    }

    adicionar(dados: Cadastro): Observable<any> {
       return this.http.post(`${this.URL}`, dados);
    }
}
