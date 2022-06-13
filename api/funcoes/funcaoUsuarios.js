const express = require("express");
const { usuarios } = require("../listas");
const router = express.Router();
const funcoesBoleto = require("./funcaoBoletos")

function buscarUsuarios() {
    return usuarios;
}

function buscarIDUsuario(id) {
    const usuario = usuarios.find(p =>
        p.id == id
    )
    return usuario;
}

function criarUsuario(info) {
    const usuario = info
    usuario.id = usuarios.length + 1;
    if (usuario.senha != null) {
        usuarios.push(usuario);
        return usuario
    }
}

function editarUsuario(id, info) {
    const usuario = info;
    const index = usuarios.findIndex(pessoaLista => pessoaLista.id == id);
    usuario.id = id;
    usuarios[index] = usuario;
    return usuario;
}

function deletarUsuario(id) {
    const boletos = funcoesBoleto.buscarBoletosUsuario(id);
    const index = usuarios.findIndex(pessoaLista => pessoaLista.id == id);
    if (boletos == null || boletos == "") {
        usuarios.splice(index, 1);
        return usuarios;
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