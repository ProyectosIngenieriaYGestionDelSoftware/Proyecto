const express = require('express');
const router = express.Router();
const db = require("../components/db/dbService");
const reservation_db = db.getReservationRepository();

router.post("/new-reservation", async function (req, res, next){
    const {id_costumer, id_business, service, resource, date, status} = req.body;
    let reservation;

    try {
        reservation = await reservation_db.createReservation({
            id_costumer: id_costumer,
            id_business: id_business,
            service: service,
            resource: resource,
            date: date,
            status: status
        });
        console.log(reservation);
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: error });
    }
});

router.post("/delete-reservation", async function (req, res, next) {
    const { _id } = req.body;

    try {
        await reservation_db.deleteReservation(_id);
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: error });
    }
});

module.exports = router;
