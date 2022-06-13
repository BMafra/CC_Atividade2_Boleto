// get
// get id
// post
// put
// delete
// variaveis: id, nome e senha

const express = require("express");
const funcaoUsuarios = require("./funcoes/funcaoUsuarios");
const router = express.Router();

router.get('/', (req, res) => {
    res.send(funcaoUsuarios.buscarUsuarios());
});

router.get('/:id', (req, res) => {
    res.send(funcaoUsuarios.buscarIDUsuario(req.params.id))
});

router.post('/', (req, res) => {
    res.json(funcaoUsuarios.criarUsuario(req.body));
});

router.put('/:id', (req, res) => {
    res.json(funcaoUsuarios.editarUsuario(req.params.id, req.body))
})

router.delete('/:id', (req, res) => {
    res.json(funcaoUsuarios.deletarUsuario(req.params.id));
})

module.exports = {
    router
}