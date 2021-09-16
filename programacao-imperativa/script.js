var contaBancaria = {
  nome: 'Nome de Teste',
  numeroDaAgencia: '1234',
  numeroDaConta: '123456',
  saldoAtual: 15.0,
  deposito: function(valor) {
     this.saldoAtual = this.saldoAtual + valor;
     this.exibirSaldo(); 
  },
  saque: function(valor) {
      if(this.saldoAtual < valor) {
          console.log(`Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.`)
      } else {
          this.saldoAtual = this.saldoAtual - valor;
          this.exibirSaldo();
      }
  },
  exibirSaldo: function() {
      return console.log(`Agora seu Saldo Atual é de R$ ${this.saldoAtual}`);
  }
}
/* Gerado JSON do objeto contaBancaria */
var contaBancariaJson = JSON.stringify(contaBancaria);

contaBancaria.exibirSaldo();
contaBancaria.deposito(10);
contaBancaria.saque(5);
contaBancaria.saque(30);

console.log(contaBancariaJson);

