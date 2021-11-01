//importações
const express = require("express");

const app = express();
const port = 8081;
const mensagem = function(){
    console.log("Servidor rodando no endereço http://localhost:"+port);
};

app.get('/', function(req, res){
    res.send("Olá, mundo!");
});

app.listen(port, mensagem);