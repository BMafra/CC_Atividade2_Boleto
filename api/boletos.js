// get
// get id (boleto)
// get by pessoa
// post
// put
// variaveis: id, id_pessoa, id_usuario, nome_pessoa, status e valor
const express = require("express");
const { buscarIDPessoa } = require("./pessoas");
const { buscarIDUsuario } = require("./usuarios");
const router = express.Router();

const boletos = [
    {id: 1, id_pessoa: 1, id_usuario: 1, nome_pessoa: "Bruna", status: "Pendente", valor: 500},
    {id: 2, id_pessoa: 1, id_usuario: 1, nome_pessoa: "Bruna", status: "Pendente", valor: 70},
    {id: 3, id_pessoa: 2, id_usuario: 2, nome_pessoa: "Camilly", status: "Pago", valor: 1200},
]

const newList = [];

function mostrarBoletos(){
    return boletos;
}

router.get('/', (req, res) => {
    res.json(mostrarBoletos())
});

function mostrarBoleto(idBoleto){
    const boleto = boletos.find(objetoLista => objetoLista.id == idBoleto)
    return boleto;
}

router.get('/:id', (req, res) => {
    res.json(mostrarBoleto(req.params.id))
});

function mostrarBoletoPessoa(idPessoa){
    boletos.forEach(e =>{
        if(e.id_pessoa == idPessoa){
            newList.push(e)
        }
    });
    return newList;
}

router.get('/pessoa/:id', (req, res) => {
    res.json(mostrarBoletoPessoa(req.params.id));
    newList.splice(0, newList.length);
});

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
    router,
    mostrarBoleto,
    mostrarBoletos, 
    mostrarBoletoPessoa, 
    criarBoleto,
    editarBoleto
}