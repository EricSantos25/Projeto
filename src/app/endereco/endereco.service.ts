import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class EnderecoService {
    URL = 'http://localhost:3000/endereco';

    constructor (private http: HttpClient) {}

    listar(){
        return this.http.get<any[]>(`${this.URL}`)
    }
}
