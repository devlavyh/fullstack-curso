function saudacao(nome){
  return `Olá! ${nome}!`;
}

console.log(saudacao("Lavinia"));

//

function dobro(numero){
  return numero * 2;
}

console.log(`Seu número multiplicado por 2 é ${dobro(10)}`);

//

function soma(n1, n2){

  return n1 + n2;
}

console.log(`A soma dos números é ${soma(7, 12)}`);

//

function parOuImpar(numero2){
  if (numero2 % 2 === 0){
    return "Par"
  }else{
    return "Ímpar"
  }
}

console.log(`O número é ${parOuImpar(8)}`);
console.log(`O número é ${parOuImpar(13)}`);

//

function maiorNumero(a1, a2){
  let maior = Math.max(a1, a2);
  return `O maior número é ${maior}`;
}

console.log(maiorNumero(7, 21));

// OU

function maiorNumero2(b1, b2){
  if(b1 > b2){
    return `O maior número é ${b1}`
  }else if (b2 > b1){
    return `O maior número é ${b2}`
  }else{
    return `Os números são iguais!`
  }
}

console.log(maiorNumero2(8, 15));
console.log(maiorNumero2(12, 12));

//

function inverterTexto(texto){
  return texto.split("").reverse().join("");
}

console.log(inverterTexto("JavaScript"));

// OU

function inverterTexto(texto){
  let invertida = "";
  for (let i = texto.length - 1; i >= 0; i--){
    invertida += texto[i];
  }
  return invertida;
}

console.log(inverterTexto("JavaScript"));