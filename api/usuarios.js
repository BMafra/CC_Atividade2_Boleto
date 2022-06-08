// get
// get id
// post
// put
// delete
// variaveis: id, nome e senha

const express = require("express");
const router = express.Router();

const usuarios = [
    { id: 1, nome: "Bruna", senha: "bruna"},
    { id: 2, nome: "Camilly",senha: "camilly"}
];

function buscarUsuarios(){
    return usuarios;
}

router.get('/', (req, res) => {
    res.send(buscarUsuarios());
});

function buscarIDUsuario(id){
    const usuario = usuarios.find( p => 
        p.id == id
    )
    return usuario;
}

router.get('/:id', (req, res) => {
    res.send(buscarIDUsuario(req.params.id))
});

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

router.post('/', (req, res) =>{
    res.json(criarUsuario(req.body));
});

function editarUsuario(id, info){
    const usuario = info;
    const index = usuarios.findIndex( pessoaLista => pessoaLista.id == id);
    usuario.id = id;
    usuarios[index] = usuario;
    return usuario;
}

router.put('/:id', (req, res) => {
    res.json(editarUsuario(req.params.id, req.body))
})

function deletarUsuario(id){
    const index = usuarios.findIndex(pessoaLista => pessoaLista.id == id);
    usuarios.splice(index, 1);
    res.json(usuarios)
}

router.delete('/:id', (req, res) => {
    res.json(deletarUsuario(req.params.id));
    //fazer verification
})

module.exports = {
    router, 
    buscarUsuarios,
    buscarIDUsuario,
    criarUsuario,
    editarUsuario,
    deletarUsuario
}