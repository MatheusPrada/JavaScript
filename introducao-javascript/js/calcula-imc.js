var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesovalido = ValidaPeso(peso);
    var alturavalida = ValidaAltura(altura);

    if (!pesovalido) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturavalida) {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

  if ( pesovalido && alturavalida ) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function ValidaPeso(peso){

    if ( peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function ValidaAltura(Altura){

    if ( Altura > 0 && Altura <= 3){
        return true;
    }else{
        return false;
    }

}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso/(altura * altura);

    return imc.toFixed(2);
}