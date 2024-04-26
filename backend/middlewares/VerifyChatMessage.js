const chat_db = require('../components/db/dbService').getChatRepository()

const verifyChatMessage = (req, res, next) => {
    const message = req.body;
    const requiredFields = chat_db.requiredFields();
    console.log(requiredFields);
    requiredFields.forEach(field => {
        if(message[field] === undefined) {   
            res.status(400).json(`Missing field: ${field}`);
            next('route')
        } 

    })
    
}

module.exports = verifyChatMessage;
