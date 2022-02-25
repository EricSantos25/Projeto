import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnderecoService } from './endereco/endereco.service';
import { AdminComponentesComponent } from './admin/admin-componentes/admin-componentes.component';
import { CadastroComponentesComponent } from './cadastro/cadastro-form/cadastro-form.component';
import { EnderecoComponentesComponent } from './endereco/endereco-componentes/endereco-componentes.component';
import { DocumentoComponentesComponent } from './documento/documento-componentes/documento-componentes.component';


@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponentesComponent,
    AdminComponentesComponent,
    DocumentoComponentesComponent,
    CadastroComponentesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
