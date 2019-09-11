class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputValor = $('#valor');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');

    }

    adiciona(event) {

        event.preventDefault();

        let data = this._inputData.value.split('-');

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
  }