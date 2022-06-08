// get
// get id (boleto)
// get by pessoa
// post
// put
// variaveis: id, id_pessoa, id_usuario, nome_pessoa, status e valor
const express = require("express");
const router = express.Router();

const boletos = [
    {id: 1, id_pessoa: 1, id_usuario: 1, nome_pessoa: "Bruna", status: "Pendente", valor: 500},
    {id: 2, id_pessoa: 1, id_usuario: 1, nome_pessoa: "Bruna", status: "Pendente", valor: 70},
    {id: 3, id_pessoa: 2, id_usuario: 2, nome_pessoa: "Camilly", status: "Pago", valor: 1200},
]

function mostarBoletos(){
    return boletos;
}

router.get('/', (req, res) => {
    res.json(mostarBoletos())
});

function mostarBoleto(idBoleto){
    const boleto = boletos.find(objetoLista => objetoLista.id == idBoleto)
    return boleto;
}

router.get('/:id', (req, res) => {
    res.json(mostarBoleto(req.params.id))
});

function mostarBoletoPessoa(idPessoa){
    const boletosPessoa = boletos.find(objetoLista => objetoLista.id_pessoa == idPessoa)
    return boletosPessoa;
}

router.get('/pessoa/:id', (req, res) => {
    res.json(mostarBoletoPessoa(req.params.id));
});

function criarBoleto(info){
    const boleto = info;
    const boletoPessoa = boletos.find(objetoLista => objetoLista.id_pessoa == boleto.id_pessoa)
    const boletoUsuario = boletos.find(objetoLista => objetoLista.id_usuario == boleto.id_usuario)
    if(boletoPessoa != null && boletoUsuario != null && boleto.valor > 0){
        boleto.id = boletos.length + 1;
        boletos.push(boleto);
    } else {
        console.log("Tem algo errado ai amigão!!")
    }
}

router.post('/', (req, res) => {
    res.json(criarBoleto(req.body));
})

function editarBoleto(id, info){
    const boleto = info;
    boleto.id = id;
    const index = boletos.findIndex(objetoLista => objetoLista.id == id);
    boletos[index] = boleto;
    return boleto;
}

router.put('/:id', (req, res) => {
    res.json(editarBoleto(req.params.id, req.body))
});

module.exports = {
    router
}