import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnderecoService } from 'src/app/service/endereco.service';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})

export class EnderecoFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, private enderecoService: EnderecoService) { }
  ngOnInit() {
    this.form =this.fb.group({
        //Endereco
          cep: [null],
          logradouro: [null],
          numero: [null],
          complemento: [null],
          bairro: [null],
          municipio: [null],
          uf: [null],
          tipo: [null]
    })
  }

  onSubmit(){
    this.submitted = true;
    
    if (this.form.valid){
      this.enderecoService.adicionar(this.form.value).subscribe(response => console.log(response))

    }
  
  }
}

