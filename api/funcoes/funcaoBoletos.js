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
    const id_boleto_pessoa = info.id_Pessoa;
    const id_boleto_usuario = info.id_usuario;
    const boleto = info;
    const id_pessoa = buscarIDPessoa();
    const id_usuario = buscarIDUsuario();
    console.log(id_pessoa);
    console.log(id_usuario);
    for(let i = 0; i < boletos.length; i++){
        if(id_boleto_pessoa == id_pessoa && id_boleto_usuario == id_usuario && info.valor > 0 ){
            boletos.push(boleto);
        }
    }
    return boleto;
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