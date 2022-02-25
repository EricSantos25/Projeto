import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { cadastro } from '../Cadastro Modules/cadastro/domain';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
 
  constructor(private http: HttpClient) { }

  adicionar(dados: cadastro): Observable<any> {
   console.log(dados)
   console.log(`${API_PATH}/cadastro`)
    return this.http.post(`${API_PATH}/cadastro`, dados);
  
  }
  
  
}
