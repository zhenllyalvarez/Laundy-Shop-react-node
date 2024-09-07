const express = require('express');
const router = express.Router();
const connection = require("../Config/DatabaseConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



router.post("/api/register", async (req, res) => {
    const { fullname, email, number, password, conpassword } = req.body;
    const checkUser = "SELECT * FROM user WHERE fullname = ? OR email = ?";
    
    connection.query(checkUser, [fullname, email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }

        if (results.length > 0) {
            const existingUser = results[0];
            if(existingUser.fullname === fullname) {
                return res.status(400).json({ message: "Fullname already exists" });
            }
            if(existingUser.email === email) {
                return res.status(400).json({ message: "Email already exists" });
            }
        }

        if (password !== conpassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const insertUserQuery = "INSERT INTO user (fullname, email, number, password) VALUES (?, ?, ?, ?)";

            connection.query(insertUserQuery, [fullname, email, number, hashedPassword], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: "Error inserting user", error: err });
                }
                return res.status(201).json({ message: "User registered successfully" });
            });
        } catch (err) {
            return res.status(500).json({ message: "Error hashing password", error: err });
        }
    });
});

router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    const checkEmail = "SELECT * FROM user WHERE email = ?";

    try {
        connection.query(checkEmail, [email], async (err, results) => {
            if (err) {
                console.error("Database error:", err.message); // Log error message
                return res.status(500).json({ message: "Database error", error: err.message });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            try {
                const isMatch = await bcrypt.compare(password, results[0].password);
                if (!isMatch) {
                    return res.status(401).json({ message: "Wrong password" });
                }

                const token = jwt.sign({ id: results[0].id }, process.env.JWT_KEY, { expiresIn: "24h" });
                console.log("JWT_KEY:", process.env.JWT_KEY);
                return res.status(200).json({ token: token });
            } catch (error) {
                console.error("Bcrypt or JWT error:", error.message); // Log error message
                return res.status(500).json({ message: "Internal server error", error: error.message });
            }
        });
    } catch (error) {
        console.error("Unexpected error:", error.message); // Log unexpected errors
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});


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
