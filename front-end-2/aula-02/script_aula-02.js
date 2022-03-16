

let escolhaUsuario = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))
let escolhaBot = parseInt( Math.random()*3+1 ) // gerando números aleatórios

if(escolhaUsuario === 1) {

    if(escolhaBot === 1) {
        alert('Empatou')
    }

    if(escolhaBot === 2) {
        alert('O bot ganhou')
    }

    if(escolhaBot === 3) {
        alert('Você ganhou')
    }
}

if(escolhaUsuario === 2) {

    if(escolhaBot === 1) {
        alert('Você ganhou')
    }

    if(escolhaBot === 2) {
        alert('Empatou')
    }

    if(escolhaBot === 3) {
        alert('O bot ganhou')
    }
}

if(escolhaUsuario === 3) {
    if(escolhaBot === 1) {
        alert('O bot ganhou')
    }
    if(escolhaBot === 2) {
        alert('Você ganhou')
    }
    if(escolhaBot === 3) {
        alert('Você ganhou')
    }
}

console.log('Sua jogada: '+escolhaUsuario)
console.log('Jogada do Bot: '+escolhaBot)
    

// let user = {
//     name: "Sarah Silva",
//     birthDate:"18/11/2019",
//     age: 2
// }
// // pegado as informações 
// for(let detalhe in user){
//     console.log(user[detalhe]);
// }
