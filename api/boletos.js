// get
// get id (boleto)
// get by pessoa
// post
// put
// variaveis: id, id_pessoa, id_usuario, nome_pessoa, status e valor
const express = require("express");
const funcaoBoletos = require("./funcoes/funcaoBoletos");
const funcaoPessoas = require("./funcoes/funcaoPessoas");
const funcaoUsuarios = require("./funcoes/funcaoUsuarios");
const router = express.Router();


router.get('/', (req, res) => {
    res.json(funcaoBoletos.mostrarBoletos())
});

router.get('/:id', (req, res) => {
    res.json(funcaoBoletos.mostrarBoleto(req.params.id))
});

router.get('/pessoa/:id', (req, res) => {
    res.json(funcaoBoletos.buscarBoletosPessoa(req.params.id));
});

router.post('/', (req, res) => {
    res.json(funcaoBoletos.criarBoleto(req.body));
})

router.put('/:id', (req, res) => {
    res.json(funcaoBoletos.editarBoleto(req.params.id, req.body))
});

module.exports = {
    router
}