import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CadastroService } from './services/cadastro.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './Cadastro Modules/cadastro/cadastro.component';
import { SenhaComponent } from './senha/senha/senha.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    SenhaComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
