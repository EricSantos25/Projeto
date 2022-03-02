import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';


@Component({
  selector: 'app-admin-componentes',
  templateUrl: './admin-componentes.component.html',
  styleUrls: ['./admin-componentes.component.css']
})
export class AdminComponentesComponent implements OnInit {

  registros: Array<any>;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.adminService.listar().subscribe(dados => this.registros = dados)
  }
}
