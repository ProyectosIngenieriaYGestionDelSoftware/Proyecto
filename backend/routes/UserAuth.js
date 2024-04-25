const express = require('express');
const router = express.Router();
const auth = require("../components/auth/AuthService");
const verifyToken = require("../middlewares/VerifyTokens");
const bcrypt = require('bcrypt');
const db = require('../components/db/dbService');
const user_db = db.getUserRepository();
const auth_db = db.getAuthRepository();

router.post("/login", async function (req, res, next) {
    // console.log(req.body);
    const { email, password } = req.body;
    // TODO: Verificar las credenciales con la base de datos
    const user = await user_db.getUserByEmail(email);

    /*const auht_user = await auth_db.getUserAuth(user._id);
    ^

TypeError: Cannot read properties of undefined (reading '_id')

AL INICIAR SESION CON UNA CUENTA QUE NO EXISTE*/

    const auht_user = await auth_db.getUserAuth(user._id);
    const encrypted = auht_user.password;
    
    bcrypt.compare(password, encrypted,(err, same) => {
        if(err){
            res.status(404).json({'message' : "Error during user authentication", "Error" : err});
            return;
        }
        if(same){
            const token = auth.generateToken(email, []);
            const {_id,__v, ...user_data} = user._doc;
            res.status(200).json({ user : user_data, token });
        }else{
            res.status(401).json({ message: "Inorrect Credentials" });
        }
    })

});

router.post("/logout", verifyToken, async function(req, res, next){
    await auth.invalidateToken(req.headers.authorization);
    res.json("OK");
});

module.exports = router


