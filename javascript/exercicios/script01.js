// CIDADE
function pegarValor1(){
  let idade = document.getElementById("minhaIdade").value;
  let cidade = document.getElementById("minhaCidade").value;

  document.getElementById("resultadoCidade").innerHTML = `<br> Você tem ${idade} anos e é de ${cidade}.`
}
// CIDADE

// OPERAÇÕES
function pegarValor2(){
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

  let soma = n1 + n2;
  let subtracao = Math.abs(n1 - n2);
  let multiplicacao = n1 * n2;
  let divisao = Math.trunc(n1 / n2);
  let resto = n1 % n2;

  document.getElementById("soma").innerHTML = `A soma de é ${soma}.`
  document.getElementById("subtracao").innerHTML = `A subtração é ${subtracao}.`
  document.getElementById("multiplicacao").innerHTML = `A multiplicação é ${multiplicacao}.`
  document.getElementById("divisao").innerHTML = `A divisão é ${divisao}.`
  document.getElementById("resto").innerHTML = `O resto é ${resto}.`
}
// OPERAÇÕES

// NASCIMENTO
function pegarValor3(){
  let anoAtual = 2025;
  let anoNascimento = document.getElementById("anoNascimento").value;

  let idade = 2025 - anoNascimento;

  document.getElementById("resultadoNascimento").innerHTML = `<br> Você nasceu no ano de ${anoNascimento} e você tem ${idade} anos!`
}

// NASCIMENTO

// NOME
function pegarValor4(){
  let nome = document.getElementById("primeiroNome").value;
  let sobrenome = document.getElementById("sobrenome").value; 

  document.getElementById("resultadoNome").innerHTML = `<br> O seu nome é ${nome} ${sobrenome}! Seja bem-vindo!`
}
// NOME

// PRODUTO
function pegarValor5(){
  let produto = document.getElementById("valorProduto").value;
  let valor = document.getElementById("valorValor").value;

  document.getElementById("resultadoProduto").innerHTML = `<br> O produto "${produto}" custa R$${valor}!`
}
// PRODUTO

// CELSIUS
function pegarValor6(){
  let temperaturaCelsius = document.getElementById("temperaturaCelsius").value;
  let fahrenheit = temperaturaCelsius * 1.8 + 32

  document.getElementById("resultadoFahrenheit").innerHTML = `<br> ${temperaturaCelsius}ºC é igual a ${fahrenheit}ºF.`
}
// CELSIUS