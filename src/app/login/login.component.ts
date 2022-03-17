import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login= {
  cpfCnpj:'',
  senha:''
};
  constructor( 
       private loginService : LoginService,
      private router : Router
    ) { }

  ngOnInit() {
  }

  async onSubmit(){
    try{
      const result = await this.loginService.login(this.login);
      console.log(` Login efetuado: ${result}`);

      //navegação para a outra rota em branco
      this.router.navigate(['']);

    }catch (error){
      console.error(error);
    }
  }
  
 
}


