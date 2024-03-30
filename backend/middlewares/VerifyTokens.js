const jwt = require('jsonwebtoken');
const SECRET_KEY = require("../config").SECRET_KEY;
const invalid_tokens = require("../utils/TokenBlackList")




const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({'message' : 'No JWT token provided'});
    }
    if(invalid_tokens.has(token)){
        return res.status(401).json({'message' : 'Canceled JWT token'});
    }

    jwt.verify(token, SECRET_KEY, (error, decoded ) => {
        if(error){
            return res.status(401).json({'message' : 'Invalid JWT token'});
        }
        req.user = decoded;
        next();
    });

}

module.exports= verifyToken;