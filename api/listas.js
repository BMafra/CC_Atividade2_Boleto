const express = require("express");
const router = express.Router();

const pessoas = [
    { id: 1, nome: "Bruna", cpf: "110.560.989-88"},
    { id: 2, nome: "Camilly", cpf: "114.726.019-20"}
];

const usuarios = [
    { id: 1, nome: "Bruna", senha: "bruna"},
    { id: 2, nome: "Camilly",senha: "camilly"}
];

const boletos = [
    {id: 1, id_pessoa: 1, id_usuario: 1, nome_pessoa: "Bruna", status: "Pendente", valor: 500},
    {id: 2, id_pessoa: 1, id_usuario: 1, nome_pessoa: "Bruna", status: "Pendente", valor: 70},
    {id: 3, id_pessoa: 2, id_usuario: 2, nome_pessoa: "Camilly", status: "Pago", valor: 1200},
]

module.exports = {
    router,
    pessoas,
    usuarios,
    boletos
}