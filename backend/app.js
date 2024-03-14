const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
const api = "/api/"

const UserRegister = require("./auth/UserRegister");
const UserAuth = require("./auth/UserAuth");

app.get(api, (req, res) => {
    res.json({'message': 'ok'});
});

app.use(api, UserRegister);
app.use(api,UserAuth);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
