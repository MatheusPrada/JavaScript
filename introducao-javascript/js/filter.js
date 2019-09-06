var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function(){

    this.value

    var pacientes = document.querySelectorAll(".paciente");
       
    if(this.value.length > 0){

        for( var x = 0; x < pacientes.length; x++){
            var paciente = pacientes[x];
            var tdnome = paciente.querySelector(".info-nome");
            var nome = tdnome.textContent;
            var expression = new RegExp(this.value, "i");

            if(!expression.test(nome)){
                paciente.classList.add("filtro");
            }else{
                paciente.classList.remove("filtro");
            }
        }

    }else{
        
        for( var x = 0; x < pacientes.length; x++){
            var paciente = pacientes[x];
            paciente.classList.remove("filtro");
        }
    }
});

