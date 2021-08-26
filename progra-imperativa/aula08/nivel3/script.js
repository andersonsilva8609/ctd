var pessoa = {
  nome: '',
  peso : 0,
  altura : 0,
  imc : 0,
  classificacao: ''
};


function consulta(){
  var consulta = confirm(`Você gostaria de marcar uma consulta?`);
  if (consulta==true) {
      pessoa.nome = prompt('Informe seu nome');
      confirmaConsulta = false;
      while(confirmaConsulta==false){
          var data = prompt('Informe a data que deseja marcar');
          var hora = prompt('Informe a hora da consulta');
          var confirmaConsulta = confirm(`O horário e data estão corretos?`);     
      
      
              if (confirmaConsulta==true) {
                      alert(`Olá, ${pessoa.nome}! Sua consulta está confirmada para ${data}, às ${hora} com a Dra. Luana Nagydai.`);          
                  }
      }
  }else {
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
    /* GRUPO SALA 07 */
      // luciano batista
      // mariana dias arantes
      // bianca moraes
      // paulo souza
      // carlos estefan
      // anderson silva