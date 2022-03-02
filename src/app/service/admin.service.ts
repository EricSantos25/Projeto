import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
    })

    export class AdminService {
    URL = 'http://localhost:3000/admin';

    constructor (private http: HttpClient) {}

    listar(){
      return this.http.get<any[]>(`${this.URL}`)
    }
}
