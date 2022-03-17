export class Documento {

    public idDoc: number

    public idCad: number

    public tipo: string

    public numero: number

    public digito: number

    public dtExp: Date

    public dtValidade: Date

    public emissor: string



    constructor( dadosEndereco: any) {

        this.idDoc = dadosEndereco.idEnd

        this.idCad = dadosEndereco.idCad

        this.tipo = dadosEndereco.tipo

        this.numero = dadosEndereco.numero

        this.digito = dadosEndereco.digito

        this.dtExp = dadosEndereco.dtExp

        this.dtValidade = dadosEndereco.dtValidade

        this.emissor = dadosEndereco.emissor

    }

}