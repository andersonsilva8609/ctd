function chamandoIMC(){
  let peso = prompt('Qual seu peso ?')
  let altura = prompt('Qual sua altura ?')
  let IMC =  peso / (altura * altura)
  
  let classificacao = IMC <= 18.5 ? 'MACREZA' : 
                  IMC >= 18.5 && IMC <= 24.9 ? 'NORMAL' :
                  IMC >= 25 && IMC <=29.9 ? 'SOBREPESO' : 
                  IMC >=30 && IMC <= 39.9 ? 'OBSIDADE':'OBSIDADE GRAVE'
  alert(`Seu IMC é: ${IMC.toFixed(2)} e sua seu perfil é: ${classificacao}`);
  }
  chamandoIMC()