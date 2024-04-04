const mongoDBUserRepository = require('../adapters/MongoDBUserRepository');
const mongoDBReservationRepository = require('../adapters/MongoDBReservationRepository');
const mongoDBAuthRepository = require('../adapters/MongoDBAuthRepository');

class DatabaseService {
    constructor() {
        this.userRepository = new mongoDBUserRepository();
        this.reservationRepository = new mongoDBReservationRepository();
        this.authRepository = new mongoDBAuthRepository();
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
}

module.exports = new DatabaseService()