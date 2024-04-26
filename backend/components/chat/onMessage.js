const {isConnected,getUser} = require('../../socket');
const chat_db = require('../db/dbService').getChatRepository();

const onMessage = (data) => {
    console.log(data.sender);
    const message = {
        sender : data.sender,
        receiver : data.receiver,
        message : data.message,
        timestamp : Date.now(),
        readed : false
    }
    if(isConnected(data.receiver)){
        getUser(data.receiver).send(JSON.stringify(message));
    }

    chat_db.createMessage(message);



}

module.exports = onMessage;