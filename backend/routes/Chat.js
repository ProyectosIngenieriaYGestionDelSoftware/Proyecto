const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/VerifyTokens');
const chat = require('../components/chat');
const verifyChatMessage = require('../middlewares/VerifyChatMessage');



router.post('/send',verifyChatMessage, (req, res, next) => {
    try {
        //chat.send();
    } catch (error) {
        
    }
})

module.exports = router;