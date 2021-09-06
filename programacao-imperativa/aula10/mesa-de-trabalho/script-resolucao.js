function substituirNomeDoClube() {
  /* 
      Regex
      Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
  */
  var letraDaMusicaAtualizada = letraDaMusica.replace(/mengo/gi, 'Vasco');
  
  return letraDaMusicaAtualizada;
}

console.log( 'Letra Atualizada: ', substituirNomeDoClube() );

function contarNumeroTotalDeCaracteres() {
  var letraDaMusicaSemEspacos = letraDaMusica
  .trim()             // 1. Removi os espaços em branco no início e no fim da string.
  .split('  ')        // 2. Criei uma Array removendo todos os espaços duplos.
  .join('')           // 3. Convertir a Array em string removendo os espaços vazios extra.
  .split(/\n\s*/g)    // 4. Criei uma Array removendo quebra de linha e espaços extras.
  .join(' ')          // 5. Converti a Array em uma string sem quebra de linha e espaço extras.

  console.log( 'Texto sem espaços extras e quebra de linha: ', letraDaMusicaSemEspacos );
  var numeroTotalDeCaracteres = letraDaMusicaSemEspacos.length;
  
  return numeroTotalDeCaracteres;
}

console.log( 'Total de caracteres: ', contarNumeroTotalDeCaracteres() );

function contarNumeroTotalDePalavras() {
  var listasDePalavrasDaLetra = letraDaMusica
  .trim()             // 1. Removi os espaços em branco no início e no fim da string.
  .split(/\n\s*/g)       // 2. Criei uma Array removendo todos os espaços duplos.
  .join(' ')           // 3. Convertir a Array em string removendo os espaços vazios extra.
  .split(' ')         // 4. Criei uma Array removendo os espaços entre as palavras.

  console.log('Lista de palavras: ', listasDePalavrasDaLetra);
  
  return listasDePalavrasDaLetra.length;
}

console.log('Total de palavras:', contarNumeroTotalDePalavras());