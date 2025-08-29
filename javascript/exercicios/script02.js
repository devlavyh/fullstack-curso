// POSITIVO-NEGATIVO
function pegarValor1(){
  let numeroQualquer = Number(document.getElementById("numeroQualquer").value);

  if (numeroQualquer === 0){
    document.getElementById("resultadoQualquer").innerHTML = `Seu número é 0!`
  }else if (numeroQualquer > 0){
    document.getElementById("resultadoQualquer").innerHTML = `Seu número é ${numeroQualquer}, positivo!`
  }else{
    document.getElementById("resultadoQualquer").innerHTML = `Seu número é ${numeroQualquer}, negativo!`
  }
}
// POSITIVO-NEGATIVO

// MAIOR-MENOR
function pegarValor2(){
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let number3 = Number(document.getElementById("number3").value);

  Number(number1)
  Number(number2)
  Number(number3)

  if(number1 === number2 && number2 === number3){
    document.getElementById("resultadoMaior").innerHTML = `Você digitou o mesmo número 3 vezes!!!`;
    return;
  }

  let maior = Math.max(number1, number2, number3);

  document.getElementById("resultadoMaior").innerHTML = `O maior número é ${maior}!`;
}
// MAIOR-MENOR

// CATEGORIA-IDADE
function pegarValor3(){
  let idade = Number(document.getElementById("valorIdade").value);
  let resultado = document.getElementById("resultadoIdade");
  let mensagem = "";

  if(idade < 12){
    mensagem = "Você é uma criança!"
  }else if(idade >= 12 && idade <= 17){
    mensagem = "Você é um adolescente!"
  }else if(idade >= 18 && idade <= 59){
    mensagem = "Você é um adulto!"
  }else{
    mensagem = "Você é um idoso!";
  }

  resultado.innerHTML = mensagem;
}
// CATEGORIA-IDADE

// MES-DO-ANO
function pegarValor4(){
  let mes = Number(document.getElementById("mesAno").value);
  let resultado2 = document.getElementById("resultadoAno");
  let mensagem2 = "";

  switch(Number(mes)){
    case 1:
      mensagem2 = "Você escolheu Janeiro!"
      break;
    case 2:
      mensagem2 = "Você escolheu Fevereiro!"
      break;
    case 3:
      mensagem2 = "Você escolheu Março!"
      break;
    case 4:
      mensagem2 = "Você escolheu Abril!"
      break;
    case 5:
      mensagem2 = "Você escolheu Maio!"
      break;
    case 6:
      mensagem2 = "Você escolheu Junho!"
      break;
    case 7:
      mensagem2 = "Você escolheu Julho!"
      break;
    case 8:
      mensagem2 = "Você escolheu Agosto!"
      break;
    case 9:
      mensagem2 = "Você escolheu Setembro!"
      break;
    case 10:
      mensagem2 = "Você escolheu Outubro!"
      break;
    case 11:
      mensagem2 = "Você escolheu Novembro!"
      break;
    case 12:
      mensagem2 = "Você escolheu Dezembro!"
      break;
    default:
      mensagem2 = "Escolha um número de 1 a 12"
      break
  }

  resultado2.innerHTML = mensagem2;
}
// MES-DO-ANO

// CALCULADORA
function pegarValor5(){
  let numberA = Number(document.getElementById("numberA").value);
  let numberB = Number(document.getElementById("numberB").value);
  let operacao = Number(document.getElementById("operacao").value);

  let resultado3 = document.getElementById("resultadoOperacao");
  let mensagem3 = "";

  switch(operacao){
    case 1:
      mensagem3 = `${numberA} + ${numberB} = ${numberA + numberB}`;
      break
    case 2:
      mensagem3 = `${numberA} - ${numberB} = ${numberA - numberB}`;
      break
    case 3:
      mensagem3 = `${numberA} × ${numberB} = ${numberA * numberB}`;
      break
    case 4:
      if(numberB === 0){
        mensagem3 = "⚠️ Erro: não é possível dividir por zero!";
      }else{
        mensagem3 = `${numberA} ÷ ${numberB} = ${numberA / numberB}`;
      }
      break
    default:
      mensagem3 = "Por favor, digite um número de 1 a 4."
      break
  }

  resultado3.innerHTML = mensagem3;
}
// CALCULADORA

// PROMOCAO
function pegarValor6(){
  let idade2 = Number(document.getElementById("valorIdade2").value);
  let vip = document.getElementById("vip").value === "true";

  let resultado6 = document.getElementById("resultadoPromocao");
  let mensagem6 = "";

  if(idade2 >= 18 && vip){
    mensagem6 = "🎉 Pode participar da promoção!";
  }else{
    mensagem6 = "❌ Não pode participar da promoção!";
  }

  resultado6.innerHTML = mensagem6;
}
// PROMOCAO