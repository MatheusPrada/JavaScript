class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputValor = $('#valor');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._listanegociacoes = new ListaNegociacoes();

    }

    adiciona(event) {

        event.preventDefault();
        
        this._listanegociacoes.adiciona(this._criaNegociacao);
        this._LimpaFormulario();

        this._listanegociacoes.negociacoes.length = 0;

        console.log(this._listanegociacoes.negociacoes);
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    _LimpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        
        this._inputData.focus();

    }
  }