import { Endereco } from "../endereco/enderecoClass"
import { Documento } from "../documento/documentoClass"
 
export class Admin {
    
    constructor(
        _idCad: number,
        _cpfCnpj: number,
        _nome: string,
        _sobreNome: string,
        _razaoSocial: string,
        _dtNascFund: Date,
        _dtCriacao: Date,
        _documento: Array<Documento>,
        _endereco: Array<Endereco>
    ) {  }
  
}