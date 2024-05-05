const express = require('express');
const app = express();
const body_parser = require('body-parser')
const PORT = process.env.PORT || 3000; 
const api = "/api/";
const cors = require('cors');

const UserRegister = require("./routes/UserRegister");
const UserAuth = require("./routes/UserAuth");
const Chat = require('./routes/Chat');
const ReservationManager = require("./routes/ReservationManager");
const UserManager = require("./routes/UserManager")
const verifyToken = require("./middlewares/VerifyTokens");
const dbConnection = require('./adapters/mongoDB');

const socket = require('./socket');
const chat = require('./components/chat')

dbConnection.once('open', () => {
    console.log('Connection successfully established with MongoDB');
}).on('error', (error) => {
    console.error('Error connecting to MongoDB:', error)
});

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.use(body_parser.json())

app.get(api,  verifyToken, (req, res) => {
    res.json({'message': 'ok'});
});

app.use(api, UserRegister);
app.use(api,UserAuth);
app.use(api + 'chat/',Chat);
app.use(api, UserAuth);
app.use(api, ReservationManager);
app.use(api, UserManager);

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

socket.createWS(server, chat.onMessage);
