import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../../service/endereco.service';


@Component({
  selector: 'app-endereco-componentes',
  templateUrl: './endereco-componentes.component.html',
  styleUrls: ['./endereco-componentes.component.css']
})
export class EnderecoComponentesComponent implements OnInit {

  registros: Array<any>;

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.enderecoService.listar().subscribe(dados => this.registros = dados)
  }

}
