const chat_db = require('../db/dbService').getChatRepository();
const {sendMessage} = require('../../socket');
const chatMessages = require('./chatMessages');

const setReadedMessages = async (data) => {
    await chat_db.setReadedMessages(data.receiver, data.sender);
    const message = chatMessages.makeReadedMessage(data);
    sendMessage(data.is_business,data.chatNumber, message);

    return 'ok'
}

module.exports = setReadedMessages;