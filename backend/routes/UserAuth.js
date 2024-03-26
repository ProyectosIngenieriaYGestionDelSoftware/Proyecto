const express = require('express');
const router = express.Router();
const auth = require("../auth/AuthService");
const verifyToken = require("../middlewares/VerifyTokens");

router.post("/login", async function (req, res, next) {
    console.log(req.body);
    const { username, password } = req.body;
    // TODO: Verificar las credenciales con la base de datos
    if (username === "usuarioDB" && password === "contraseñaDB") {
        const token = auth.generateToken(username, ["1","2","3"]);
        res.json({ token });
    } else {
        res.status(401).json({ message: "Inorrect Credentials" });
    }
});

router.post("/logout", verifyToken, async function(req, res, next){
    await auth.invalidateToken(req.headers.authorization);
    res.json("OK");
});

module.exports = router


