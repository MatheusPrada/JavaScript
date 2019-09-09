var Campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function(event){

    event.preventDefault();

    var tr = document.createElement("tr");
    
    Campos.forEach(function(campo){

        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var Volume = document.createElement("td");
    Volume.textContent = Campos[1].value * Campos[2].value;

    tr.appendChild(Volume);

    tbody.appendChild(tr);

    Campos[0].value = '';
    Campos[1].value = 1;
    Campos[2].value = 0;
    Campos[0].focus();

});