import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../service/documento.service';

@Component({
  selector: 'app-documento-componentes',
  templateUrl: './documento-componentes.component.html',
  styleUrls: ['./documento-componentes.component.css']
})
export class DocumentoComponentesComponent implements OnInit {

  registros: Array<any>

  constructor(private documentoService: DocumentoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.documentoService.listar().subscribe(dados => this.registros = dados)
  }

}
