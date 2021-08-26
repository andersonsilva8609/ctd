function conversao() {
var saudacao = 'Olá';
var nome = prompt('Qual é o seu nome ?');
var dolares = 0;
var reais = 0;
var confimacao = 0;
dolares = prompt('Quantos dolares você gostaria de cotar ? ');
confimacao = prompt('Confirma o valor de dolares você gostaria de cotar ? ');
dolares === confimacao ? reais : digiteNovamente;
reais = dolares * 5.61;
digiteNovamente = prompt('Digite o valor novamente');
alert(saudacao +' '+nome +' US$'+' '+dolares+' vale'+' R$ '+reais+' hoje.');

setTimeout(function(){
  window.open ='https://www.cotacao.com.br/';
}, 5000);
}
conversao();