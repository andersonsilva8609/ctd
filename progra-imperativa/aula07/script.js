function calcularImc() {

  var nome = prompt('Qual seu nome?');
  var peso = prompt('Qual seu peso?');
  var altura = prompt('Qual sua Altura?');
  var resultadoImc = peso / (altura * altura);

  if(resultadoImc < 18.5){
    document.write("<p> 'MACREZA' </p>");
  }
  if(resultadoImc >= 18.5 && resultadoImc <= 24.9){
    document.write("<p> 'NORMAL' </p> ");
    }
  if(resultadoImc >= 25 && resultadoImc <= 29.9){
    document.write("<p> 'SOBREPESO' </p>")
    }
  if(resultadoImc >=30 && resultadoImc <= 39.9){
    document.write("<p> 'OBSIDADE GRAVE' </p>")
  }
               
  alert(`Seu IMC é iqual a:${resultadoImc} e sua seu perfil é:${document.write}`);
}