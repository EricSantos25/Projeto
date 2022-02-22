import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  dados: Array<any> = new Array();

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.salvarDados();
  }

  salvarDados(){
    this.cadastroService.salvarDados().subscribe(dados => {
      this.dados = dados
      console.log(dados)
    }, err => {
      console.log('erro ao salvar dados', err)
    })
  }

}
