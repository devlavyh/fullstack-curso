let pessoa = {
  nome: "Lavinia",
  idade: 19,
  cidade: "Estância Velha"
}

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.profissao = "Estudante de Programação";
pessoa.idade = 20;
delete pessoa.cidade;

pessoa.apresentar = function(){
  return `Oi, eu sou ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}!`;
}

console.log(pessoa.apresentar());

//

let carro = {
  marca: "Volkswagen",
  modelo: "Gol",
  ano: 2015,
  descricao: function(){
    return `Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano}.`
  }
}

console.log(carro.descricao());

//

let livro = {
  titulo: "O toque letal do corvo",
  autor: "Mariana Rosa",
  anoPublicacao: 2025,
  descricao: function(){
    return `O livro ${this.titulo} da autora ${this.autor} foi publicado no ano de ${this.anoPublicacao}`
  }
}

console.log(livro.descricao())

//

let aluno = {
  nome: "Lucas",
  notas: [6, 8, 4, 5, 7],
  media: function(){
    let soma = 0;
    
    for (let i = 0; i < this.notas.length; i++){
      soma += this.notas[i];
    }
    return soma / this.notas.length;
  }
}

console.log(`O aluno ${aluno.nome} tem média ${aluno.media()}`);