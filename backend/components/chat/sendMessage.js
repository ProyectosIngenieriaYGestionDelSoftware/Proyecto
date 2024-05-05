const socket = require('../../socket');
const chat_db = require('../db/dbService').getChatRepository();
const chatMessages = require('./chatMessages');

const sendMessage = (data) => {
    console.log(data);
    const message = chatMessages.makeSendMessage(data);
    socket.sendMessage(data.is_business,data.chatNumber,message);
    //chat_db.createMessage(message);

    return message;
    
}

module.exports = sendMessage;