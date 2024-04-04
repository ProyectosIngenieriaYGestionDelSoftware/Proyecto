const mongoose = require('mongoose');
const {mongo} = require("mongoose");

const ReservationModel = mongoose.model('Reservation', {
    id: mongoose.Types.ObjectId,
    id_costumer: mongoose.Types.ObjectId,
    id_business: mongoose.Types.ObjectId,
    service: Number,
    resource: Number,
    date: Date,
    status: String
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
}

module.exports = MongoDBReservationRepository;