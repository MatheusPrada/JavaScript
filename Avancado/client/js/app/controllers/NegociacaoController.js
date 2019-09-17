class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputValor = $('#valor');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');

    }

    adiciona(event) {

        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        console.log(negociacao);
        console.log(DateHelper.dataTexto(negociacao.data));
    }
  }