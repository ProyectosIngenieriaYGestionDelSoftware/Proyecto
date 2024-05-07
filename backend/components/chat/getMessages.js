const chat_db = require('../db/dbService').getChatRepository();
const chatMessages = require('./chatMessages');

const getMessages = async (chatNumber) => {
    const result = (await chat_db.getChatMessages(chatNumber)).map(value => chatMessages.makeGetMessages(value))
    console.log(result);
    return result;
}

module.exports = getMessages;