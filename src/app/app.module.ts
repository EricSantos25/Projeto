import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EnderecoComponentesComponent } from './endereco/endereco-componentes/endereco-componentes.component';
import { EnderecoService } from './endereco/endereco.service';
import { AdminComponentesComponent } from './admin/admin-componentes/admin-componentes.component';
import { DocumentoComponentesComponent } from './documento/documento-componentes/documento-componentes.component';


@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponentesComponent,
    AdminComponentesComponent,
    DocumentoComponentesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
