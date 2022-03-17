import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../domain/cadastroClass';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { Documento } from '../domain/documentoClass';
import { Endereco } from '../domain/enderecoClass';


@Injectable({
    providedIn: 'root'
    })

    export class CadastroService {
    URL = 'http://localhost:3000/cadastro';

    constructor (private http: HttpClient) {}

    listar(){
      return this.http.get<any[]>(`${this.URL}`)
    }

    adicionar( cad: Cadastro, doc: Documento, end: Endereco){

      return this.http.post(`${this.URL}`, cad).toPromise().then((registros) => {

        cad.idCad = registros

        doc.idCad = registros[0].idCad

        end.idCad = registros[0].idCad

      })

   } 

    login(user:any){
      return new Promise((resolve)=>{
        window.localStorage.setItem('token','meu-token');
        resolve(true);
      });
    }

    
}
