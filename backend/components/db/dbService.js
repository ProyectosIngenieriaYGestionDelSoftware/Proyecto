const mongoDBUserRepository = require('../../adapters/MongoDBUserRepository');
const mongoDBReservationRepository = require('../../adapters/MongoDBReservationRepository');
const mongoDBAuthRepository = require('../../adapters/MongoDBAuthRepository');
const mongoDBChatRepository = require('../../adapters/mongoDBChatRepository');

class DatabaseService {
    constructor() {
        this.userRepository = new mongoDBUserRepository();
        this.reservationRepository = new mongoDBReservationRepository();
        this.authRepository = new mongoDBAuthRepository();
        this.chatRepository = new mongoDBChatRepository();
    }

    getUserRepository() {
        return this.userRepository;
    }

    getReservationRepository() {
        return this.reservationRepository;
    }

    getAuthRepository() {
        return this.authRepository;
    }

    getChatRepository() {
        return this.chatRepository;
    }
}

module.exports = new DatabaseService()