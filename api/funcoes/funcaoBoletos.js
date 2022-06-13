const express = require("express");
const { boletos } = require("../listas")
const router = express.Router();

function mostrarBoletos(){
    return boletos;
}

function mostrarBoleto(idBoleto){
    const boleto = boletos.find(objetoLista => objetoLista.id == idBoleto)
    return boleto;
}

function mostrarBoletoPessoa(idPessoa){
    boletos.forEach(e =>{
        if(e.id_pessoa == idPessoa){
            newList.push(e)
        }
    });
    return newList;
}

function criarBoleto(info){
    info.id = boletos.length + 1;
    boletos.push(info);
    return info;
}

function editarBoleto(id, info){
    const boleto = info;
    boleto.id = id;
    const index = boletos.findIndex(objetoLista => objetoLista.id == id);
    boletos[index] = boleto;
    return boleto;
}

function buscarBoletosPessoa(id) {
    const lista = [];
    boletos.forEach(e => {
        if (e.id_pessoa == id){
            lista.push(e);
        }
    })
    return lista;
}

function buscarBoletosUsuario(id){
    const lista = [];
    boletos.forEach(e => {
        if(e.id_usuario == id){
            lista.push(e);
        }
    })
    return lista;
}

module.exports = {
    router,
    mostrarBoletos,
    mostrarBoleto,
    mostrarBoletoPessoa,
    criarBoleto,
    editarBoleto,
    buscarBoletosPessoa,
    buscarBoletosUsuario
}