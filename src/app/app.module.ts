import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroService } from './service/cadastro.service';
import { EnderecoService } from './service/endereco.service';
import { DocumentoService } from './service/documento.service';

import { AdminComponentesComponent } from './admin/admin-componentes/admin-componentes.component';
import { routing } from './app.routing';


import { HomeComponent } from './home/home.component';
//import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponentesComponent,
    LoginComponent,
    HomeComponent,
    AutenticacaoComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    FormsModule
  ],
  providers:[AuthGuard],
  //providers: [EnderecoService, DocumentoService, CadastroService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
