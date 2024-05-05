const db = require('../components/db/dbService');
const user_db = db.getUserRepository();

const userIsValid = async (userEmail) => {
    const user = user_db.getUserByEmail(userEmail);
    if(user){
        return user;
    }
    return false;
}

module.exports = userIsValid;