const socket = require('../../socket');
const user_db = require('../db/dbService').getUserRepository();

const findOpenChats = async (data) => {
    const result  = socket.findOpenConnections(data.is_business, data.userEmail);
    for (let index = 0; index < result.length; index++) {
        result[index] = await user_db.getUserByEmail(result[index].user);   
    }
    return result
}

module.exports = findOpenChats;