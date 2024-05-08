const mongoose = require('mongoose');

const ReservationModel = mongoose.model('Reservation', {
    id: mongoose.Types.ObjectId,
    id_costumer: mongoose.Types.ObjectId,
    id_business: mongoose.Types.ObjectId,
    service: {
        name: String,
        description: String,
        duration: Number,
        price: Number
    },
    date: Date
});



class MongoDBReservationRepository {
    async createReservation(reservationData){
        const newReservation = new ReservationModel(reservationData);
        return newReservation.save();
    }

    async getReservation(reservationId) {
        return ReservationModel.findById(reservationId);
    }

    async updateReservation(reservationId, reservationData) {
        return ReservationModel.findByIdAndUpdate(reservationId, reservationData, { new: true });
    }

    async deleteReservation(reservationId) {
        return ReservationModel.findByIdAndDelete(reservationId);
    }

    async getReservations(id_business) {
        return ReservationModel.find({ id_business: id_business });
    }
}

module.exports = MongoDBReservationRepository;