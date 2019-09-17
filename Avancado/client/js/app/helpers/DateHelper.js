class DateHelper {

    constructor(){

        throw new Error('Esta classe n�o pode ser instanciada');
    }

    static textoData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error("Deve estar no formato aaaa-mm-dd"); 
        return new Date (...texto.split('-').map((item, indice)=> item - indice % 2 ));

    }

    static dataTexto(data){

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; 

    }
}