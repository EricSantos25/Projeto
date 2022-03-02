import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroService } from './service/cadastro.service';
import { EnderecoService } from './service/endereco.service';
import { DocumentoService } from './service/documento.service';

import { AdminComponentesComponent } from './admin/admin-componentes/admin-componentes.component';
import { EnderecoComponentesComponent } from './admin/endereco-componentes/endereco-componentes.component';
import { DocumentoComponentesComponent } from './admin/documento-componentes/documento-componentes.component';
import { CadastroComponentesComponent } from './admin/cadastro-componentes/cadastro-componentes.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';
import { DocumentoFormComponent } from './documento-form/documento-form.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponentesComponent,
    CadastroComponentesComponent,
    EnderecoComponentesComponent,
    DocumentoComponentesComponent,
    CadastroFormComponent,
    EnderecoFormComponent,
    DocumentoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [EnderecoService, DocumentoService, CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
