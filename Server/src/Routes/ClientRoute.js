const express = require('express');
const router = express.Router();
const connection = require("../Config/DatabaseConfig");

// Fetch transactions with a specific status
router.get("/api/customer/transaction/list", (req, res) => {
    const status = req.query.status || 0;
    const query = "SELECT * FROM client_transaction WHERE status = ?";
    
    connection.query(query, [status], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Failed to retrieve data" });
        } else {
            res.json(result);
        }
    });
});

router.get("/api/completed/transaction/list", (req, res) => {
    const status = req.query.status || 1;
    const query = "SELECT * FROM client_transaction WHERE status = ?";

    connection.query(query, [status], (err,result) => {
        if(err) {
            return res.status(500).json({ error: "Failed to retrieve data"});
        } else {
            res.json(result);
        }
    })
});

// fetch all
router.get('/api/transaction/list', (req, res) => {
    const query = "SELECT * FROM client_transaction";
    connection.query(query, (err, result) => {
        if(err) {
            return res.status(500).json({ error: "Failed to retrieve data"});
        } else {
            res.json(result);
        }
    })
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

// update the status
router.put("/api/transaction/update/:id", (req, res) => {
    const query = "UPDATE client_transaction SET status = ? WHERE id = ?";
    const id = req.params.id;
    const { status } = req.body;
    connection.query(query, [status, id ], (err, result)=> {
        if(err) {
            return res.status(500).json({ error: "Failed to update data"});
        } else {
            res.json(result);
        }
    })
});

module.exports = router;
