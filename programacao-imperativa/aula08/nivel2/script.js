var pessoa = {
  nome: '',
  peso : 0,
  altura : 0,
  imc : 0,
  classificacao: ''
};


function consulta(){
  var consulta = confirm(`Você gostaria de marcar uma consulta?`)
  if (consulta==true) {
      pessoa.nome = prompt('Informe seu nome')
      var data = prompt('Informe a data que deseja marcar')
      var hora = prompt('Informe a hora da consulta')
      alert(`Olá, ${pessoa.nome}! Sua consulta foi marcada para ${data}, às ${hora} com a Dra. Luana Nagydai.`)
  } else {
     alert('Obrigado pela sua visita!')
  }
}


function calcularImc() {

  pessoa.peso = parseFloat(prompt('Qual seu peso?'));
  pessoa.altura = parseFloat(prompt('Qual sua Altura?'));
  pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);

  if (pessoa.imc < 18.5){
      pessoa.classificacao = 'Magreza'
      alert(`Seu IMC é ${pessoa.imc.toFixed(2)} e sua classificação é ${pessoa.classificacao}.`);
  }else if (18.5 <= pessoa.imc && pessoa.imc <= 24.9){
      pessoa.classificacao = 'Normal'
      alert(`Seu IMC é ${pessoa.imc.toFixed(2)} e sua classificação é ${pessoa.classificacao}.`);
  }else if (25 <= pessoa.imc && pessoa.imc <= 29.9){
      pessoa.classificacao = 'Sobrepeso'
      alert(`Seu IMC é ${pessoa.imc.toFixed(2)} e sua classificação é ${pessoa.classificacao}. Você deveria marcar uma consulta com um(a) nutricionista.`);
      consulta();
  }else if (30 <= pessoa.imc && pessoa.imc <= 39.9){
      pessoa.classificacao = 'Obesidade'
      alert(`Seu IMC é ${pessoa.imc.toFixed(2)} e sua classificação é ${pessoa.classificacao}. Você deveria marcar uma consulta com um(a) nutricionista.`);
      consulta();
  }else if(pessoa.imc >= 40){
      pessoa.classificacao = 'Obesidade Grave'
      alert(`Seu IMC é ${pessoa.imc.toFixed(2)} e sua classificação é ${pessoa.classificacao}. Você deveria marcar uma consulta com um(a) nutricionista.`);
      consulta();
  };

};


/*
          Nível I - Refatorando
          O que pode ser feito para melhorar a legibilidade¹ do código?
          ¹Facilidade de entendimento do algoritimo gerado no código. 
          Nível II - Adicionando novas funcionalidades
          O usuário com sobrepeso, obsidade e/ou obsidade grave deverão:
          - Receber uma alerta recomendando uma consulta com nutricionista (Boleano - true ou false);
              - Caso a resposta seja sim, preencherá com:
                  - Seu nome;
                  - Dia da semana que pretende se consultar;
                  - O horário do dia que pretende se consultar;
                  - Agradecer o usuário pelo nome e informar o dia e horário da consulta com o Dra. Luana Nagydai.
              - Caso a resposta seja não:
                  - Receberá um pedido de agradecimento.
          Nível III - Correção de error 
          (🍒 do bolo)
          Recebemos um pedido de alteração da clínica:
          O usuário com sobrepeso, obsidade e/ou obsidade grave deverão:
          - Receber uma alerta recomendando uma consulta com nutricionista (Boleano - true ou false);
              - Caso a resposta seja sim, preencherá com:
                  - Seu nome;
                  - Dia da semana que pretende se consultar;
                  - O horário do dia que pretende se consultar;
                  (ajuste)
                  - Confirmar com o usuário se o dia e o horário estão corretos:
                      Caso a resposta seja sim:
                      - Segue o fluxo normalmente.
                  - Caso a resposta seja não:
                      - Dia da semana que pretende se consultar;
                      - O horário do dia que pretende se consultar;
                  (fim do ajuste)
                  - Agradecer o usuário pelo nome e informar o dia e horário da consulta com o Dra. Luana Nagydai.
              - Caso a resposta seja não:
                  - Receberá um pedido de agradecimento.
      */    

      // luciano batista
      // mariana dias arantes
      // bianca moraes
      // paulo souza
      // carlos estefan
      // anderson silva