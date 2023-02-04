function mostrarmensagem(){
   console.log("Oi, fui mostrado.");
}

mostrarmensagem(); //ACIONAR FUNÇÃO.

//------------------------------------

function soma(n1, n2) {
    var somaDosNumeros = n1 + n2;

    console.log(somaDosNumeros);
}

soma(10, 4)
soma(5, 4)
soma(3, 6)

//------------------------------------

function soma(n1, n2) {
    var somaDosNumeros = n1 + n2;

    return somaDosNumeros; 
}

var meusnumeros = soma(10, 4);

console.log(somaDosNumeros);

//------------------------------------