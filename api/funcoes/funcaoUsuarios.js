const express = require("express");
const { usuarios } = require("../listas");
const router = express.Router();

function buscarUsuarios(){
    return usuarios;
}

function buscarIDUsuario(id){
    const usuario = usuarios.find( p => 
        p.id == id
    )
    return usuario;
}

function criarUsuario(info){
    const usuario = info
    usuario.id = usuarios.length + 1;
    if (usuario.senha != null){
        usuarios.push(usuario);
        return usuario
    } else {
        console.log("Arruma o cpf ai po!")
    }
}

function editarUsuario(id, info){
    const usuario = info;
    const index = usuarios.findIndex( pessoaLista => pessoaLista.id == id);
    usuario.id = id;
    usuarios[index] = usuario;
    return usuario;
}

function deletarUsuario(id){
    const boletos = buscarBoletosUsuario(id);
    const index = usuarios.findIndex(pessoaLista => pessoaLista.id == id);
    if(boletos == null || boletos == ""){
        usuarios.splice(index, 1);
        res.json(buscarUsuarios());
    } else {
        res.status(400).send("A pessoa possui boletos pendentes!");
    }
}

module.exports = {
    router,
    buscarUsuarios,
    buscarIDUsuario,
    criarUsuario,
    editarUsuario,
    deletarUsuario
}