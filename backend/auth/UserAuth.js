const express = require('express');
const router = express.Router();

router.post("/login", async function(req, res, next){
    res.json({'message' : 'Login direction'});
});

router.post("/logout", async function(req, res, next){
    res.json({'message' : "Logout direction"});
});

module.exports = router


