import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Endereco } from "../domain/enderecoClass";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class EnderecoService {
    URL = 'http://localhost:3000/endereco';

    constructor (private http: HttpClient) {}

    listar(){
        return this.http.get<any[]>(`${this.URL}`)
    }

    adicionar(dados: Endereco): Observable<any> {
        return this.http.post(`${this.URL}`, dados);
    }
}
