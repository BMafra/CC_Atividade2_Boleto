const express = require("express");
const pessoas = require("./api/pessoas");
const usuarios = require("./api/usuarios");
const boletos = require("./api/boletos");
const app = express.Router();
const port = 3000;

app.use('/api/pessoas', pessoas);
app.use('/api/usuarios', usuarios);
app.use('/api/boletos', boletos);

app.listen(port, () => {
console.log(`Example, app listening at https://localhost: ${port}`);
})
