import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../cadastro.service';




@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroComponentesComponent {

form: FormGroup;
submitted = false;



   constructor(private fb: FormBuilder, private service: CadastroService) { }
    ngOnInit(){
      this.form =this.fb.group({
        cpfCnpj:[null, [Validators.required,Validators.minLength(10), Validators.maxLength(14)]],
        senha :[null, [Validators.required,Validators.minLength(6), Validators.maxLength(20)]],
        nome:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
        sobreNome:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
        razaoSocial:[null, [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
        dtNascFund:[null],
        dtCriacao:[null]
        

      })


    }
    onSubmit(){
      this.submitted = true;
      if (this.form.valid){
        this.service.adicionar(this.form.value).subscribe(response => console.log(response))
      }
    }

    hasError(field: string){
      return this.form.get(field).errors;
    }

    onCancel(){
      this.submitted = false;
      this.form.reset();
      console.log('onCancel');
    }
}