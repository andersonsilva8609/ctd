const numero = [10,15,25,35,40,55]
  
  //solução 1
  //let soma = numero[0];
for(const soma of numero){
    soma+= numero[soma];
    console.log(soma);
  }

//solução 2
// const somaInicial = numero.reduce(
//     (primeiroV, proximoV) => {
//         console.log( primeiroV + proximoV);
//         return primeiroV + proximoV;
//     }
// );