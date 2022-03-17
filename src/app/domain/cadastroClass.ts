export class Cadastro {

    public idCad: any

    public cpfCnpj: number

    public nome: string

    public sobreNome: string

    public razaoSocial: string

    public DtNascFund: Date



    constructor( dadosCadastro: any) {

      this.idCad = dadosCadastro.idCad

      this.cpfCnpj = dadosCadastro.cpfCnpj

      this.nome = dadosCadastro.nome

      this.sobreNome = dadosCadastro.sobreNome

      this.razaoSocial = dadosCadastro.razaoSocial

      this.DtNascFund = dadosCadastro.DtNascFund

     }

}