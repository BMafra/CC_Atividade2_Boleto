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

function criarPessoas(pessoaInfo){
    const pessoa = pessoaInfo
    pessoa.id = pessoas.length + 1;
    if(pessoa.cpf != null || pessoa.cpf != "" || pessoa.nome != null || pessoa.nome != "") {
        pessoas.push(pessoa);
        return pessoa
    } else {
        res.status(400).send("Dados incompletos!")
    }
}

function editarPessoas(id, info){
    const pessoa = info;
    pessoa.id = id;
    const index = pessoas.findIndex(pessoaLista => pessoaLista.id == id);
    pessoas[index] = pessoa;
    return pessoa;
}

function deletarPessoas(id){
   const boletos = buscarBoletosPessoa(id);
   const index = pessoas.findIndex( p => p.id == id);
   if (boletos == "" || boletos == null){
       boletos.splice(index, 1);
       res.json(buscarPessoas());
   } else {
       res.status(400).send("A pessoa possui boletos pendentes!");
   }
} 

module.exports = {
    router,
    buscarPessoas,
    buscarIDPessoa,
    criarPessoas,
    editarPessoas,
    deletarPessoas
}

