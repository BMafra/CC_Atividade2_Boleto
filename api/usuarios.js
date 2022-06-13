// get
// get id
// post
// put
// delete
// variaveis: id, nome e senha

const express = require("express");
const funcaoUsuarios = require("./funcoes/funcaoUsuarios");
const router = express.Router();
const { buscarBoletosUsuario } = require("./funcoes/funcaoBoletos")

router.get('/', (req, res) => {
    res.send(funcaoUsuarios.buscarUsuarios());
});

router.get('/:id', (req, res) => {
    res.send(funcaoUsuarios.buscarIDUsuario(req.params.id))
});

router.post('/', (req, res) => {
    const usuario = req.body;
    if (usuario.senha == null) {
        res.status(400).send("Dados incompletos!");
    } else {
        res.json(funcaoUsuarios.criarUsuario(usuario));
    }
});

router.put('/:id', (req, res) => {
    res.json(funcaoUsuarios.editarUsuario(req.params.id, req.body))
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const boletos = buscarBoletosUsuario(id);
    if (boletos == null || boletos == "") {
        res.json(funcaoUsuarios.deletarUsuario(id));
    } else {
        res.status(400).send("Boletos pendentes!");
    }
})

module.exports = {
    router
}