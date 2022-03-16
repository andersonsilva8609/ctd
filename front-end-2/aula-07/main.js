let buttonRefence = document.querySelector('#mainButton')


buttonRefence.addEventListener('click', function(event){
    console.log('Click detectado no Event Listener: ', event);
    event.preventDefault();
});

function clickouBotao(){
  console.log('usuário click no botão');
}

//verifica se algo carregou depois que a página quebrou
//window.onload = function(){ console.log("Carregou //por compelto"); }