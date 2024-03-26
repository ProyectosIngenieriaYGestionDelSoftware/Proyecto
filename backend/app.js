const express = require('express');
const app = express();
const body_parser = require('body-parser')
const PORT = process.env.PORT || 3000; 
const api = "/api/";

const UserRegister = require("./routes/UserRegister");
const UserAuth = require("./routes/UserAuth");
const verifyToken = require("./middlewares/VerifyTokens");

app.use(body_parser.json())

app.get(api,  verifyToken, (req, res) => {
    res.json({'message': 'ok'});
});

app.use(api, UserRegister);
app.use(api,UserAuth);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
