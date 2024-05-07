const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyTokens');
const chat = require('../components/chat');
const verifyChatMessage = require('../middlewares/VerifyChatMessage');


router.get('/', (req, res, next)=> {
    res.json('Chat endpoint');
});

router.delete('/deleteChat', (req, res, next) => {
    
    try {
        chat.deleteChat(req.params.chatNumber);
        res.status(200);
    } catch (error) {
        res.status(500).json("Internal error" + error);
    }
});

router.get('/findOpenChats',async (req, res, next) => {
    const data = req.query;
    try {
        const result = await chat.findOpenChats(data);
        res.json({chats : result});
    } catch (error) {
        res.status(500).json("Internal error : " + error);
    }
});

router.get('/getMessages', async (req, res, next) => {
    try {
        const {chatNumber} = req.query;
        res.json(await chat.getMessages(chatNumber));
        next();
    } catch (error) {
        res.json(error);
        next(error);
    }
    
});

router.post('/sendMessage',verifyChatMessage, (req, res, next) => {
    try {
        const data = req.body;
        res.status(200).json(chat.sendMessage({
            sender:data.sender, 
            receiver: data.receiver,
            message : data.message,
            is_business : !data.is_business,
            chatNumber : data.chatNumber
        }));
        next();
    } catch (error) {
        res.status(500).json("Internal error : " + error);
    }
});



router.put('/setReadedMessages', (req, res, next) => {
    const data = req.body;
    try {
        res.status(200).json(chat.setReadedMessages({
            sender:data.sender, 
            receiver: data.receiver,
            is_business : !data.is_business,
            chatNumber : data.chatNumber
        }));
        next();
    } catch (error) {
        res.status(500).json("Internal error : " + error);
        next(error);
    }
    
});

module.exports = router;