var pacientes = document.querySelectorAll(".paciente"); //buscar classe ou ID pra dentro do javascript"
// querySelector - Apenas 1 elemento
// querySelectorAll - Mais de 1 elemento que tenha a mesma classe(EX: paciente).

//console.log(paciente);

for(var i = 0; i < pacientes.length; i++) { //pacientes.length: número de classe "paciente" repetida. 

var paciente = pacientes[i]; //cada vez q passar no FOR, vai ser 1 item da lista.

var tdPeso = paciente.querySelector(".info-peso"); // Associar <TD>(info.peso) para variavel criada'peso'
var peso = tdPeso.textContent; // Exibe o conteudo de texto do HTML no Console.

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent; // Exibe o conteudo de texto do HTML no Console.

var Tdimc = paciente.querySelector(".info-imc");


var pesoEvalido = true;
var alturaEvalida = true;

if(peso <= 0 || peso >= 1000) {
      console.log("Peso inválido");
      pesoEvalido = false;
      Tdimc.textContent = "peso Inválido";
      paciente.classList.add("paciente-invalido"); // Hiperligar com CSS(.paciente-invalido).
}

if(altura < 0 || altura >= 3)  {
     console.log("Altura Invalida");
     alturaEvalida = false;
     tdAltura.textContent = "Altura Inválida"; //dentro da <td> com o resultado no Navegador.
     paciente.classList.add("paciente-invalido");  // Hiperligar com CSS(.paciente-invalido).
}

if(pesoEvalido && alturaEvalida) {

var imc = calculaImc(peso, altura);
Tdimc.textContent = imc; // Escolher o número de casas decimais (Ex: "imc.toFixed(3)" de 10.12345 pra 10.123).
console.log(imc);
}
}

function calculaImc(peso, altura){
       var imc = 0;

       imc =peso/(altura*altura);

       return imc.toFixed(2);
}

