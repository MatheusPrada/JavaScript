var botão = document.querySelector("#adicionar-paciente");

botão.addEventListener("click", function(event){

    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = ObtemPaciente(form);

    var erros = ValidaPaciente(paciente);

    if(erros.length > 0){
        MostraErros(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagens = document.querySelector("#mensagens-erro");
    mensagens.innerHTML = "";
    
});

function adicionaPacienteNaTabela(paciente){

    var pacienteTR = MontaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);

}

function MostraErros(erros){

    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function (erro){

        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });

    return erros;
}

function ObtemPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    }

    return paciente;
}

function MontaTr(paciente){

    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(MontaTD(paciente.nome, "info-nome"));
    pacienteTR.appendChild(MontaTD(paciente.peso, "info-peso"));
    pacienteTR.appendChild(MontaTD(paciente.altura, "info-altura"));
    pacienteTR.appendChild(MontaTD(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(MontaTD(paciente.imc, "info-imc"));

    return pacienteTR;
}

function MontaTD(dado, classe){
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function ValidaPaciente(paciente){

    var erros = []; 

    if(paciente.nome.length == 0) erros.push("Nome em branco");
    if(paciente.peso.length == 0) erros.push("Peso em branco");
    if(paciente.altura.length == 0) erros.push("Altura em branco");
    if(!ValidaPeso(paciente.peso)) erros.push("Peso inválido!");
    if(!ValidaAltura(paciente.altura)) erros.push("Altura inválida!");
    if(paciente.gordura.length == 0) erros.push("Gordura em branco");
    

    return erros;
}