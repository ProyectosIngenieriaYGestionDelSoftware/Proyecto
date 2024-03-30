const jwt = require('jsonwebtoken');

const SECRET_KEY = require("../config").SECRET_KEY;

const invalid_tokens = require("../utils/TokenBlackList");

const generateToken = (user, permissions) => {
return jwt.sign({data:user, permissions: permissions}, SECRET_KEY, {expiresIn: 60 * 60 /* 1 hora */ });
}

const invalidateToken = async (token) => {
    invalid_tokens.add(token);
    const expireIn = (Math.floor(jwt.decode(token).exp * 1000) - Date.now()); //milisegundos
    setTimeout(() => {
        console.log("Token borrado: " + token);
        invalid_tokens.delete(token);
    }, expireIn);
    
}

module.exports = {
    generateToken,
    invalidateToken
}