const deleteChat = require('./deleteChat');
const findOpenChats = require('./findOpenChats');
const getMessages = require('./getMessages');
const sendMessage = require('./sendMessage');
const setReadedMessages = require('./setReadedMessages')

module.exports = {
    getMessages,
    sendMessage,
    setReadedMessages,
    findOpenChats,
    deleteChat
}