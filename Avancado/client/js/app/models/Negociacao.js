class Negociacao{

    constructor(data, quantidade, valor){

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    ObtemVolume(){

       return this.quantidade * this.valor; 

    };
}