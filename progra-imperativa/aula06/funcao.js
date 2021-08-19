function perguntaNumero(texto){
	return parseFloat(prompt(texto).replace(",", ".").replace(":","."));
} 
function formataNumero(numero) {
	return numero.toFixed(2).replace(".", ",");
}
function imprima(texto) {
	var campo = document.createElement("p");
	campo.innerHTML = texto;
	document.body.appendChild(campo)

}
function carregaCss() {
	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'basico.css';
    link.media = 'all';
    head.appendChild(link);
}
carregaCss();