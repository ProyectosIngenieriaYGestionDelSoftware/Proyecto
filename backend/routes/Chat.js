const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyTokens');
const chat = require('../components/chat');
const verifyChatMessage = require('../middlewares/VerifyChatMessage');


router.get('/', (req, res, next)=> {
    res.json('Chat endpoint');
});

router.get('/getMessages', (req, res, next) => {
    try {
        const {userEmail} = req.query;
        res.json(chat.getMessages(userEmail));
        next();
    } catch (error) {
        res.json(error);
        next(error);
    }
    
});

router.post('/sendMessage',verifyChatMessage, (req, res, next) => {
    const data = req.body;
        res.status(200).json(chat.sendMessage({
            sender:data.sender, 
            receiver: data.receiver,
            message : data.message,
            is_business : !data.is_business,
            chatNumber : data.chatNumber
        }));
        next();
    try {
        
    } catch (error) {
        res.status(500).json("Internal error");
    }
});



router.put('/setReadedMessages', (req, res, next) => {
    try {
        res.status(200).json(chat.setReadedMessages({
            sender:data.sender, 
            receiver: data.receiver,
            is_business : data.is_business,
            chatNumber : data.chatNumber
        }));
        next();
    } catch (error) {
        res.json(error);
        next(error);
    }
    
});

module.exports = router;