var pedra; 
var papel; 
var tesoura; 
var empate;
var ganhador;

function jogo(){
    let result;
    switch(ganhador){
        case "1": result = pedra === papel;
            break;
        case "2": result = pedra === tesoura;
            break;
        case "3": result = pedra === pedra;
            break;
        default: result = empate;
    }
    return result;
}
jogo();