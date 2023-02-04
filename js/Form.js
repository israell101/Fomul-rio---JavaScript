var titulo = document.querySelector(".titulo"); //busca seletores CSS
titulo.textContent = "Aparecida nutricional";

var botaoAdicionar = document.querySelector("#adicionar-paciente");// Buscar botão do HTML pro JavaScript.
botaoAdicionar.addEventListener("click", function(event) {//Escutador de evento de "Clicker".(pela função anonima)
    event.preventDefault();//EVITAR QUE A PÁGINA RECARREGUE e de LIMPAR O FORMULARIO.

    var form = document.querySelector("#form-adiciona");

    function ObtempacientedoFormulario(form) {
    
    paciente = {
       nome: form.nome.value,      // 
       peso: form.peso.value,      //  MOSTRA OS VALORES INSERIDOS NOS <INPUTS>
       altura: form.altura.value,  //  Pegando dados do <FORM>.
       gordura: form.gordura.value, //
       imc: calculaImc(form.eso.value, form.altura.value)
    }
    return paciente;
}

    var pacienteTr = document.createElement("tr"); // Cria uma <TR> ou qualquer outro elemento.
    pacienteTr.classList.add("paciente"); // Adiciona uma classe(paciente) dentro da <TR> 
    // EX: <tr classe="paciente"></tr>


    var nomeTd = document.createElement("td");// Cria uma <TD> ou qualquer outro elemento. ex: <p>,<h1>,<h1>.....
    nomeTd.classList.add("info-nome");   //Adicionar classe "info-nome" dentro da <TD>.
    //EX: <td classe="info-nome"> </td>
    var pesoTd = document.createElement("td");   //
    pesoTd.classList.add("info-peso");

    var alturaTd = document.createElement("td"); //
    alturaTd.classList.add("info-altura");

    var gorduraTd = document.createElement("td");//
    gorduraTd.classList.add("info-gordura");

    var imcTd = document.createElement("td");    //
    imcTd.classList.add("info-imc");

    nomeTd.textContent = nome;      //
    pesoTd.textContent = peso;      // INSERE OS DADOS NA <TD>
    alturaTd.textContent = altura;  //
    gorduraTd.textContent = gordura;//
    imcTd.textContent = calculaImc(peso, altura); // FUNCTION no calculo-imc.js

    pacienteTr.appendChild(nomeTd);   //  
    pacienteTr.appendChild(pesoTd);   // Adicionar <TD> dentro da <TR>
    pacienteTr.appendChild(alturaTd); // TR é pai dessas 5 TD
    pacienteTr.appendChild(gorduraTd);//
    pacienteTr.appendChild(imcTd);    //  FUNCTION no calculo-imc.js

    var tabela = document.querySelector("#tabela-pacientes");// Colocar tabela <TR> dentro do <TBODY> que #tabela-pacientes.

    tabela.appendChild(pacienteTr); //Coloca "pacienteTr" dentra da tabela.
});

//------------------------------------------------------
/*

<tr classe="paciente">
     <td classe="info-nome">Igor</td>
     <td classe="info-peso">56.8</td>
</tr>

<form class="form-tabela">
    <input name="nome"> </input>
    <input name="peso"> </input>
    <button id="adicionar-pessoa" class="botao">Adicionar</button>
</form>


var botaoAdicionar = document.querySelector("#adicionar-pesso");// Buscar botão do HTML pro JavaScript.
botaoAdicionar.addEventListener("click", function(event) {//Escutador de evento de "Clicker".(pela função anonima)
    event.preventDefault();//EVITAR QUE A PÁGINA RECARREGUE e de LIMPAR O FORMULARIO.

    var form = document.querySelector("#paciente");

    var nome = form.nome.value;
    var peso = form.peso.value;

    var tabelaTr = document.createElement("tr");
    tabelaTr.classList.add("paciente");


    var nomeTd = document.createElement("td"); 
    nomeTd.classList.add("info-nome");

    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;

    tabelaTr.appendChild(nomeTd);
    tabelaTr.appendChild(pesoTd);
});
*/
