const RECEIVED = "received";
const READED = "readed";
const DELETED = 'deleted';

const makeSendMessage = (data) => {
    return message = {
        sender : data.sender,
        receiver : data.receiver,
        message : data.message,
        timestamp : Date.now(),
        readed : false,
        action : RECEIVED
    }
}

const makeReadedMessage = (data) => {
    return message = {
        sender : data.sender,
        receiver : data.receiver,
        action : READED
    }
}

const makeGetMessages = (data) => {
    return {
        sender : data.sender,
        readed : data.readed,
        message : data.message,
        timestamp : data.timestamp,
    }
}
module.exports = {
    makeReadedMessage,
    makeSendMessage,
    makeGetMessages
}