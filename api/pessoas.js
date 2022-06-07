// get
// get id
// post
// put
// delete 
// variaveis: nome, id e cpf
// fazer delete, e testar todos

const { Router } = require("express");
const express = require("express");
const rout = express.Router();

const pessoas = [
    { id: 1, nome: "Bruna", cpf: "110.560.989-88"},
    { id: 2, nome: "Camilly", cpf: "114.726.019-20"}
];

function buscarPessoas(){
    return pessoas;
}

Router.get('/', (req, res) => {
    res.send(buscarPessoas());
});

function buscarIDPessoa(req){
    const id = req.params.id;
    pessoas.find( p => 
        p.id == id
    )
    return id;
}

Router.get('/:id', (req, res) => {
    res.send(buscarIDPessoas())
});

function criarPessoas(req, res){
    const id = req.params.id;
    pessoa.id = pessoas.length + 1;
    if (pessoa.cpf > 0){
        pessoas.push(pessoa);
    } else {
        console.log("Arruma o cpf ai po!")
    }
}

Router.post('/:id', (req, res) =>{
    res.json(criarPessoas(req.params.id));
});

function editarPessoas(req, res){
    const id = req.params.id;
    const pessoa = req.body;
    const index = pessoa.findIndex( pessoaLista => pessoaLista.id == id);
    pessoa.id = id;
    pessoa[index] = pessoa;
    return pessoa;
}

Router.put('/:id', (req, res) => {
    res.json(editarPessoas(req.params.id, req.body))
})

function deletarPessoas(req, res){
    const id = req.params.id;
    const index = listaUsuarios.findIndex(pessoaLista => pessoaLista.id == id);
    listaUsuarios.splice(index, 1);
    res.json(listaUsuarios)
}

Router.delete('/:id', (req, res) => {
    res.json(deletarPessoas(req.params.id));
})

module.express = {
    rout, 
    buscarPessoas,
    buscarIDPessoa,
    criarPessoas,
    editarPessoas,
    deletarPessoas
}