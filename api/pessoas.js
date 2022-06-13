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
const { buscarBoletosPessoa } = require("./funcoes/funcaoBoletos")

router.get('/', (req, res) => {
    res.send(funcaoPessoas.buscarPessoas());
});

router.get('/:id', (req, res) => {
    res.send(funcaoPessoas.buscarIDPessoa(req.params.id))
});

router.post('/', (req, res) =>{
    const pessoa = req.body;
    console.log(pessoa)
    if(pessoa.cpf == null || pessoa.cpf == "" || pessoa.nome == null || pessoa.nome == "") {
        res.status(400).send("Dados incompletos!");
    } else {
        res.json(funcaoPessoas.criarPessoas(pessoa));
    }
});

router.put('/:id', (req, res) => {
    res.json(funcaoPessoas.editarPessoas(req.params.id, req.body))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const boletos = buscarBoletosPessoa(id);
    if (boletos == "" || boletos == null){
        res.json(funcaoPessoas.deletarPessoas(id));
    } else {
        res.status(400).send("Boletos pendentes!");
    }
})

module.exports = {
    router
}