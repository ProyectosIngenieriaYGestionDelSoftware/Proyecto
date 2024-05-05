const chat_db = require('../db/dbService').getChatRepository();

const getMessages = async (userEmail) => {
    return await chat_db.getUserMessages(userEmail);
}

module.exports = getMessages;