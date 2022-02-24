import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../documento.service';

@Component({
  selector: 'app-documento-componentes',
  templateUrl: './documento-componentes.component.html',
  styleUrls: ['./documento-componentes.component.css']
})
export class DocumentoComponentesComponent implements OnInit {

  registros: Array<any>

  constructor(private documentoService: DocumentoService) { }

  ngOnInit() {
    this.lista();
  }

  lista() {
    this.documentoService.lista().subscribe(dados => this.registros = dados)
  }

}
