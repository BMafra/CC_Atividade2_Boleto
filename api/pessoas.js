// get
// get id
// post
// put
// delete 
// variaveis: nome, id e cpf
// fazer delete, e testar todos

const express = require("express");
const funcaoPessoas = require("./funcoes/funcaoPessoas");
const router = express.Router();

router.get('/', (req, res) => {
    res.send(funcaoPessoas.buscarPessoas());
});

router.get('/:id', (req, res) => {
    res.send(funcaoPessoas.buscarIDPessoa(req.params.id))
});

router.post('/', (req, res) =>{
    res.json(funcaoPessoas.criarPessoas(req.body));
});

router.put('/:id', (req, res) => {
    res.json(funcaoPessoas.editarPessoas(req.params.id, req.body))
})

router.delete('/:id', (req, res) => {
    res.json(funcaoPessoas.deletarPessoas(req.params.id));
})

module.exports = {
    router
}