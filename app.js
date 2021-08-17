const express = require("express")
const app = express() // A variável app é uma instância de express

app.use((req, res, next) => {    // Arrow function; req = requisição, res = resposta, next = quando quiser chamar outro método
    res.status(200).send({
        mensagem: "Ok, deu bom"
    });
});

module.exports = app;