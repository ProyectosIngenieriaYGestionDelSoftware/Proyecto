const {isConnected, getUser} = require('../../socket');
const chat_db = require('../db/dbService').getChatRepository();

const send = (data) => {
    const message = {
        sender : data.sender,
        receiver : data.receiver,
        message : data.message,
        timestamp : Date.now(),
        readed : false
    }
    if(isConnected(data.receiver)){
        getUser(data.receiver).send(message);
    }
    chat_db.createMessage(message);
    
}

module.exports = send;