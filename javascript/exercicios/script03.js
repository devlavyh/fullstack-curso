// IMPRIMINDO 1 AO 20
let imprimirNumero = document.getElementById("imprimirNumero");

for (let n = 1; n <= 20; n++){
  imprimirNumero.innerHTML += n + "<br>";
}
// IMPRIMINDO 1 AO 20

// TABUADA DO 7
let imprimirTabuada = document.getElementById("imprimirTabuada");
let tabuada = 7;

for (i = 1; i <= 10; i++){
  imprimirTabuada.innerHTML += tabuada + " x " + i + " = " + (tabuada * i) + " <br> "
}
// TABUADA DO 7

// CONTAGEM REGRESSIVA
let imprimirContagem = document.getElementById("imprimirContagem");

for (i = 10; i >= 0; i--){
  imprimirContagem.innerHTML += i + "<br>";
}
// CONTAGEM REGRESSIVA

// NUMEROS PARES
let p = 0;
let imprimirPares = document.getElementById("imprimirPares");

while (p <= 20){
  if (p % 2 === 0) {
    imprimirPares.innerHTML += p + "<br>";
  }
  p++;
}
// NUMEROS PARES

// SOMA 100
let soma = 0;

for (let s = 1; s <= 100; s++){
  soma += s;
}

document.getElementById("imprimirSoma").innerHTML = "Resultado: " + soma;
// SOMA 100