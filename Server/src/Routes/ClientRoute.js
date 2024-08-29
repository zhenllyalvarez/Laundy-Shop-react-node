const express = require('express');
const router = express.Router();
const connection = require("../Config/DatabaseConfig");

router.get("/api/transaction/list", (req, res) => {
    connection.query("SELECT * FROM client_transaction", (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Failed to retrieve data" });
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
