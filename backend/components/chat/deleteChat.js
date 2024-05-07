const socket = require('../../socket');
const chat_db = require('../db/dbService').getChatRepository();

const deleteChat = async (chatNumber) => {
    chat_db.deleteChat(chatNumber);
    socket.disconnect(chatNumber);
}

module.exports = deleteChat;