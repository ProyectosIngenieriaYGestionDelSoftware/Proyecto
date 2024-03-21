const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret_key';
const invalid_tokens = [];

const generateToken = (user, permissions) => {
return jwt.sign({data:user, permissions: permissions}, SECRET_KEY, {expiresIn: 60 * 60 /* 1 hora */ });
}

const verifyToken = (req, res, next) => {
    console.log(req.originalUrl);
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({'message' : 'No JWT token provided'});
    }

    if(invalid_tokens.includes(token)){
        return res.status(401).json({'message' : 'Invalid JWT token'});
    }

    jwt.verify(token, SECRET_KEY, (error, decoded ) => {
        if(error){
            return res.status(401).json({'message' : 'Invalid JWT token'});
        }
        req.user = decoded;
        next();
    });
}

const invalidateToken = (token) => {
    const index = invalid_tokens.push(token);
    const expireIn = (Math.floor(jwt.decode(token).exp * 1000) - Date.now())/1000; //segundos
    setTimeout(() => {
        invalid_tokens.splice(index, 1);
    }, expireIn);
}

module.exports = {
    generateToken,
    verifyToken,
    invalidateToken
}