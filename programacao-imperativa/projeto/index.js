//importando omódulo Express
const express = require('express');

//inicializando o contrutor do express
const aplicativo = express();

aplicativo.use(express.json());//converter os valores do formulario para JSON
aplicativo.use(express.urlencoded({extended: true}));//certificar que o JSON sera entregue como objeto literal

//3.Criando a rota e retornando um arquivo HTML
//GET estou pedido algo
aplicativo.get('/',(_, res)=> res.sendFile(__dirname + '/cadastra.html'));

//5.criar uma rota para receber os dados do fomulário.
//Post estou eniando algo
aplicativo.post('/cadastrar',(req, res)=> res.json(req.body));

//4.inicializar o servidor.
aplicativo.listen(8081,()=> console.log('Servidor esta funcionando!'));
