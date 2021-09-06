var tempo = 0;
var tempoPadrao = 0;
var prato = '';
var opcao = '';

function microondas(){
 var opcao = prompt('\n1 - Pipoca\n2 - Macarrão\n3 - Carne\n4 - Feijão\n5 - Brigadeiro\n6 - Prato inexistente')
 switch (opcao) {
     case 1: 
         tempoPadrao=10;
         prato='Pipoca';
         break;
     case 2: 
         tempoPadrao=8;
         prato='Macarrão';
         break;
     case 3: 
         tempoPadrao=15;
         prato='Carne';
         break;
     case 4: 
         tempoPadrao=12;
         prato='Feijão';
         break;
     case 5: 
         tempoPadrao=8;
         prato='Brigadeiro';
         break;
     default:
         tempoPadrao=0;
         prato='Prato inexistente!';
 }

   if (tempo > tempoPadrao * 2){
     alert('O prato',prato,'queimou!!!!');
   }
   if (tempo < tempoPadrao){
     alert('Tempo insuficiente para fazer',prato);
   }
   if (tempo > tempoPadrao * 3){
     alert('KABUMM!!!!');
   }
   if (tempo == tempoPadrao){
     alert('O prato',prato,'está pronto! Bom apetite!');
   }
}
microondas();