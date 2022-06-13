const express = require("express");
const router = express.Router();
const { pessoas } = require("../listas");

function buscarPessoas(){
    return pessoas;
}

function buscarIDPessoa(id){
    const pessoa = pessoas.find( p => 
        p.id == id
    )
    return pessoa;
}

function criarPessoas(pessoa){
    pessoa.id = pessoas.length + 1;
    pessoas.push(pessoa);
    return pessoa
}

function editarPessoas(id, info){
    const pessoa = info;
    pessoa.id = id;
    const index = pessoas.findIndex(pessoaLista => pessoaLista.id == id);
    pessoas[index] = pessoa;
    return pessoa;
}

function deletarPessoas(id){
    const index = pessoas.findIndex(p => p.id == id);
    console.log(index)
    pessoas.splice(index, 1);
    return pessoas;
}
   

module.exports = {
    router,
    buscarPessoas,
    buscarIDPessoa,
    criarPessoas,
    editarPessoas,
    deletarPessoas
}

