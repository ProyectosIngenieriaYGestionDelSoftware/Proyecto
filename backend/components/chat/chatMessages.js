const RECEIVED = "received";
const READED = "readed";

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
module.exports = {
    makeReadedMessage,
    makeSendMessage
}