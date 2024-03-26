const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/register", async function(req, res, next){
    const {username, password} = req.body;

    bcrypt.hash(password, saltRounds, (err, encrypted) => {
        if(err){
            res.json({'message' : "Error during user registration", "Error" : err});
            return;
        }

        //TODO: Guardar credenciales en DB

        res.status(200).json({'message':'Successfully registered user','username':username, 'hash': encrypted});
        
    })
});

module.exports = router