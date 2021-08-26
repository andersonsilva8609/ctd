// Criar variável ARRAY
var frutas = ["Morango", "Laranja", "Banana"];

// Saber quantos itens temos na variável
//console.log(frutas.length);

// Acessar o valor pelo índice
//console.log(frutas[0]);

// CRUD - CREATE, READ, UPDATE, DELETE

    /// Criar (adicionar item no final da lista)
    frutas.push("Abacate");

    /// Criar (adicionar item no começo da lista)
    frutas.unshift("Abacaxi");

    /// Retornar o index (posição)
    frutas.indexOf("Laranja")

    /// Atualizar o valor conforme o index
    frutas[2] = "Pêra"

    /// Deletar (remover último item da lista)
    //frutas.pop();

    /// Deletar (remover primeiro item da lista)
    //frutas.shift();

    // Deletar faixa de itens
    //frutas.splice(1,3);


// RESULTADO
console.log(frutas);
//console.log(Object.keys(frutas));