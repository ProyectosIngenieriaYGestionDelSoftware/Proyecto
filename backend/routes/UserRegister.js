const express = require('express');
const router = express.Router();

router.post("/register", async function(req, res, next){
    res.json({'message' : "Register direction"});
});

module.exports = router