const express = require("express");
const pessoas = require("./api/pessoas");
const usuarios = require("./api/usuarios");
const boletos = require("./api/boletos");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/pessoas", pessoas.router)
app.use("/api/usuarios", usuarios.router)
app.use("/api/boletos", boletos.router)

app.listen(port, () => {
    console.log(`Example, app listening at http://localhost: ${port}`);
})

// EXPLICAÇÃO FIND
// for(int i = 0; i < boletos.length; i++){
//     if(boletos[i].id == id) {
//         return boletos[i]
//     }
// }