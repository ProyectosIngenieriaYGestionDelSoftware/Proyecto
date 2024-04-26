const db = require('../components/db/dbService');
const user_db = db.getUserRepository();

const userIsValid = async (userEmail) => {

    if(await user_db.getUserByEmail(userEmail)){
        return true;
    }
    return false;
}

module.exports = userIsValid;