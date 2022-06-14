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

router.get('/pessoas/:id', (req, res) => {
    res.json(funcaoBoletos.buscarBoletosPessoa(req.params.id));
    
});

router.post('/', (req, res) => {
    const info = req.body;
    const pessoa = funcaoPessoas.buscarIDPessoa(info.id_pessoa)
    const usuario = funcaoUsuarios.buscarIDUsuario(info.id_usuario);
    if(pessoa != null && usuario != null){
        if (info.valor > 0){
            res.json(funcaoBoletos.criarBoleto(info));
        } else {
            res.json(400).send("Valor deve ser maior que 0 (zero)!");
        }
    } else {
        res.json(400).send("Pessoa ou usuário inexistente!")
    }
})

router.put('/:id', (req, res) => {
    res.json(funcaoBoletos.editarBoleto(req.params.id, req.body))
});

module.exports = {
    router
}