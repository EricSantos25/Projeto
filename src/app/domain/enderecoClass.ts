export class Endereco {

    public idEnd: number

    public idCad: number

    public cep: string

    public logradouro: string

    public numero: number

    public complemento: string

    public bairro: string

    public municipio: string

    public uf: string

    public tipo: string



    constructor( dadosEndereco: any) {

        this.idEnd = dadosEndereco.idEnd

        this.idCad = dadosEndereco.idCad

        this.cep = dadosEndereco.cep

        this.logradouro = dadosEndereco.logradouro

        this.numero = dadosEndereco.numero

        this.complemento = dadosEndereco.complemento

        this.bairro = dadosEndereco.bairro

        this.municipio = dadosEndereco.municipio

        this.uf = dadosEndereco.uf

        this.tipo = dadosEndereco.tipo

    }

}