const express = require('express');
const router = express.Router();
const db = require("../components/db/dbService");
const reservation_db = db.getReservationRepository();

router.post("/new-reservation", async function (req, res, next){
    const {id_costumer, id_business, service, date} = req.body;
    let reservation;

    try {
        reservation = await reservation_db.createReservation({
            id_costumer: id_costumer,
            id_business: id_business,
            service: service,
            date: date
        });
        console.log(reservation);

        res.status(201).json({ message: "The new reservation was successfully created" });
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: error });
    }
});

router.put("/update-reservation", async function (req, res, next) {
    const { id, newData } = req.body;

    try {
        await reservation_db.updateReservation(id, newData);

        res.status(200).json({ message: "The reservation was successfully updated" });
    } catch (error) {
        console.warn(error);
        res.status(500).json( { message: error });
    }
});

router.delete("/delete-reservation", async function (req, res, next) {
    const { id } = req.body;

    try {
        await reservation_db.deleteReservation(id);

        res.status(200).json({ message: "The reservation was successfully deleted" });
    } catch (error) {
        console.warn(error);
        res.status(500).json({ message: error });
    }
});

router.get("/get-reservations", async function (req, res, next) {
    const id_business = req.params.id_business;
    try {
        reservations = await reservation_db.getReservations(id_business);

        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Error getting reservations of the business with the id: " + id_business });
    }
});

module.exports = router;
