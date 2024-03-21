const express = require('express');
const app = express();
const body_parser = require('body-parser')
const PORT = process.env.PORT || 3000; 
const api = "/api/";

const UserRegister = require("./auth/UserRegister");
const UserAuth = require("./auth/UserAuth");
const AuthService = require("./auth/AuthService");

app.use(body_parser.json())

app.get(api, AuthService.verifyToken , (req, res) => {
    res.json({'message': 'ok'});
});

app.use(api, UserRegister);
app.use(api,UserAuth);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
