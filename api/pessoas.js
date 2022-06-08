// get
// get id
// post
// put
// delete 
// variaveis: nome, id e cpf
// fazer delete, e testar todos

const express = require("express");
const { mostrarBoletos } = require("./boletos");
const router = express.Router();

const pessoas = [
    { id: 1, nome: "Bruna", cpf: "110.560.989-88"},
    { id: 2, nome: "Camilly", cpf: "114.726.019-20"}
];

function buscarPessoas(){
    return pessoas;
}

router.get('/', (req, res) => {
    res.send(buscarPessoas());
});

function buscarIDPessoa(id){
    const pessoa = pessoas.find( p => 
        p.id == id
    )
    return pessoa;
}

router.get('/:id', (req, res) => {
    res.send(buscarIDPessoa(req.params.id))
});

function criarPessoas(pessoaInfo){
    const pessoa = pessoaInfo
    pessoa.id = pessoas.length + 1;
    if(pessoa.cpf != null || pessoa.cpf == "") {
        pessoas.push(pessoa);
        return pessoa
    } else {
        console.log("Sem cpf bobão!")
    }
}

router.post('/', (req, res) =>{
    res.json(criarPessoas(req.body));
});

function editarPessoas(id, info){
    const pessoa = info;
    pessoa.id = id;
    const index = pessoas.findIndex( pessoaLista => pessoaLista.id == id);
    pessoas[index] = pessoa;
    return pessoa;
}

router.put('/:id', (req, res) => {
    res.json(editarPessoas(req.params.id, req.body))
})

function deletarPessoas(id){
    const index = pessoas.findIndex(pessoaLista => pessoaLista.id == id);
    const pessoa = pessoas.find(objetoLista => objetoLista.id == id)
    const boletos = mostrarBoletos();
    const boleto = boletos.find(b => b.id_pessoa == pessoa.id);
    if(boleto == null){
        pessoas.splice(index, 1);
    }
   return pessoas;
}

router.delete('/:id', (req, res) => {
    res.json(deletarPessoas(req.params.id));
})

module.exports = {
    router,
    buscarPessoas,
    buscarIDPessoa,
    criarPessoas,
    editarPessoas,
    deletarPessoas
}