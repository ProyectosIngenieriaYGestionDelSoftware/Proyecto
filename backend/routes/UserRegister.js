const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('../components/db/dbService.js');
const user_repo = db.getUserRepository();
const auth_repo = db.getAuthRepository();
const auth = require('../components/auth/AuthService.js');

router.post("/register", async function(req, res, next){
    const {username, password, email, phone_number, is_business,type } = req.body;
    let user;

    try {
      user = await user_repo.createUser({
        name : username,
        email : email,
        phone_number : phone_number,
        is_business : is_business,
        type : type,
        services : is_business ? [] : undefined
      });


      
    } catch (err) {
      console.warn(err);
      if(err.code === 11000){
        res.status(409).json({message : "Duplicate key error collection", key : err.keyPattern});
        return;
      }
      res.status(500).json({ message: err });
      return;
    }

    bcrypt.hash(password, saltRounds, async (err, encrypted) => {
      if (err) {
        console.warn(err);
        res.status(500).json({ message: "Error during user registration", Error: err });
        return;
      }
      try {
        
        await auth_repo.createUserAuth({
          _id: user._id,
          name: username,
          password: encrypted,
        });

      } catch (err) {
        console.warn(err);
        res.status(500).json({ message: 'Internal error' });
        return;
      }

      res.status(200)
        .json({
          message: "Successfully registered user",
          username: username,
          token: auth.generateToken(user._id,[]),
        });
    })
});

module.exports = router