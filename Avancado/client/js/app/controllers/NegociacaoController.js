class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputValor = $('#valor');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');

    }

    adiciona(event) {

        event.preventDefault();

        let helper = new DateHelper();

        let negociacao = new Negociacao(
            helper.textoData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let diaMesAno = helper.dataTexto(negociacao.data);
    }
  }