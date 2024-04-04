const express = require('express');
const router = express.Router();
const auth = require("../components/auth/AuthService");
const verifyToken = require("../middlewares/VerifyTokens");
const bcrypt = require('bcrypt');

router.post("/login", async function (req, res, next) {
    console.log(req.body);
    const { username, password } = req.body;
    // TODO: Verificar las credenciales con la base de datos
    let dbPassword = "";
    bcrypt.compare(password, dbPassword,(err, same) => {
        if(err){
            res.status(404).json({'message' : "Error during user authentication", "Error" : err});
            return;
        }
        if(same){
            const token = auth.generateToken(username, ["1","2","3"]);
            res.status(200).json({ token });
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


