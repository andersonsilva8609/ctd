        const Cliente = require('./cliente');
               
        var dadosDaConta = {
            nome: 'Willian',
            sobrenome: 'Sant Anna',
            numeroDaAgencia: 2909,
            numeroDaConta: 49090,
            saldoAtual: 21400,
            depositar: function() {
          
            },
            sacar: function() {
             
            }
        }

       
        var cliente = new Cliente('Willian','San Anna', 2000, 2220, 10000);
        console.log('Saldo Atual:', `R$ ${dadosDaConta.saldoAtual}`);
        console.log('----------------');
        console.log('Depósito:', dadosDaConta.depositar(1000));
        console.log('----------------');
        console.log('Saque:', dadosDaConta.sacar(2000));
        console.log('Saque:', dadosDaConta.sacar(1000));

    