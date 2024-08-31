const express = require('express');
const router = express.Router();
const connection = require("../Config/DatabaseConfig");

router.get("/api/transaction/list", (req, res) => {
    const query = "SELECT * FROM client_transaction";
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Failed to retrieve data" });
        } else {
            res.json(result);
        }
    });
});

router.post("/api/add/transaction", (req, res) => {
    const query = "INSERT INTO client_transaction (name, number, type, kilo, price, transaction_date, date_received) VALUES (?,?,?,?,?,?,?)";
    const {name, number, type, kilo, price, transaction_date, date_received} = req.body;
    const values = [name, number, type, kilo, price, transaction_date, date_received];

    connection.query(query, values, (err, result) => {
        if(err) {
            return res.status(500).json({ error: "Failed to add data" });
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
