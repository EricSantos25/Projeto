import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../service/cadastro.service';
import { DocumentoService } from '../service/documento.service';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  form: FormGroup
  formCad: FormGroup
  formDoc: FormGroup
  formEnd: FormGroup

  submited = false;
  
  constructor(private fb: FormBuilder, private cadastro: CadastroService, private documento: DocumentoService, private endereco: EnderecoService) { }

  ngOnInit() {


    
    this.formCad = this.fb.group({
      cpfCnpj:[null, [Validators.required,Validators.minLength(10), Validators.maxLength(14)]],
      senha :[null, [Validators.required,Validators.minLength(6), Validators.maxLength(20)]],
      nome:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      sobreNome:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      razaoSocial:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      dtNascFund:[null],
      dtCriacao:[null]
    })

    this.formEnd = this.fb.group({
      cep :[null, [Validators.required, Validators.maxLength(8)]],
      logradouro:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(14)]],
      numero:[null, [Validators.required,Validators.maxLength(1)]],
      complemento:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(14)]],
      bairro:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(14)]],
      municipio:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(14)]],
      uf:[null, [Validators.required,Validators.maxLength(2)]],
      tipo:[null, [Validators.required,Validators.maxLength(2)]]
    })

    this.formDoc = this.fb.group({
      tipo :[null, [Validators.required,Validators.minLength(2), Validators.maxLength(3)]],
      numero:[null, [Validators.required,Validators.maxLength(8)]],
      digito:[null, [Validators.required,Validators.maxLength(1)]],
      dtExp:[null],
      dtValidade:[null],
      emissor:[null, [Validators.required,Validators.maxLength(3)]],
    })
  }

  onSubmit(){
    this.submited = true;
    console.log('enviando')
    if (this.formCad.valid){
      this.cadastro.adicionar(this.formCad.value, this.formDoc.value, this.formEnd.value).then(response => console.log(response))

      //estava dando falha de compilaçao falar com o eric para saber oq são eles
     // this.documento.adicionar(this.formCad.value, this.formDoc.value, this.formEnd.value).then(response => console.log(response))
   //   this.endereco.adicionar(this.formCad.value, this.formDoc.value, this.formEnd.value).then(response  => console.log(response))
    }
  }

  onCancel(){
    this.submited = false;
    this.formCad.reset();
    console.log('onCancel');
  }
}