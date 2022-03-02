import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro-componentes',
  templateUrl: './cadastro-componentes.component.html',
  styleUrls: ['./cadastro-componentes.component.css']
})

export class CadastroComponentesComponent implements OnInit {

  registros: Array<any>

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.cadastroService.listar().subscribe(dados => this.registros = dados)
  }

}