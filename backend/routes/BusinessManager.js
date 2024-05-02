const express = require('express');
const router = express.Router();
const db = require("../components/db/dbService");
const user_db = db.getUserRepository();

router.put("/update-services", async function (req, res, next) {
    const { email, newData } = req.body;

    try {
        user = await user_db.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: "The user does not exist" });
        }
        await user_db.updateUser(user.id, newData);
        res.status(200).json({ message: "Services correctly updated" });
    } catch (error) {
        console.warn(error);
        res.status(500).json( { message: error });
    }
});

module.exports = router;