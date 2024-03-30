const mongoDBUserRepository = require('../adapters/MongoDBUserRepository');
const mongoDBReservationRepository = require('../adapters/MongoDBReservationRepository');

class DatabaseService {
    constructor() {
        this.userRepository = new mongoDBUserRepository();
        this.reservationRepository = new mongoDBReservationRepository();
    }

    getUserRepository() {
        return this.userRepository;
    }

    getReservationRepository() {
        return this.reservationRepository;
    }
}

module.exports = new DatabaseService()