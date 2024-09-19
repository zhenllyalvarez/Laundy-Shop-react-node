const express = require('express');
const router = express.Router();
const connection = require("../Config/DatabaseConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ message: "Unauthorized access, token missing." });
      }
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({ message: "Invalid or expired token." });
        }
        req.user = decoded.user;
        next();
      });      
}

router.get("/api/verify", verifyUser, (req, res) => {
    return res.json({ message: "Success", user: req.user});
});

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

    // Mocking a DB check
    const checkEmail = "SELECT * FROM user WHERE email = ?";
    connection.query(checkEmail, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "User not existed" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Wrong password" });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: "24h" });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({ message: "isLoggedIn", token });
    });
});



// Fetch transactions with a specific status
router.get("/api/customer/transaction/list", verifyUser, (req, res) => {
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

router.get("/api/completed/transaction/list", verifyUser, (req, res) => {
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
router.get('/api/transaction/list', verifyUser, (req, res) => {
    const query = "SELECT * FROM client_transaction";
    connection.query(query, (err, result) => {
        if(err) {
            return res.status(500).json({ error: "Failed to retrieve data"});
        } else {
            res.json(result);
        }
    })
});

router.put('/api/update/transaction/:id', verifyUser, (req, res) => {
    const id = req.params.id;
    const { name, number, type, kilo, price, transaction_date, date_received } = req.body;
    const query = "UPDATE client_transaction SET name = ?, number = ?, type = ?, kilo = ?, price = ?, transaction_date = ?, date_received = ? WHERE id = ?";
    const values = [name, number, type, kilo, price, transaction_date, date_received, id];
    connection.query(query, values, (err, result) => {
      if(err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to update data" });
      } else {
        res.json({ message: "Transaction updated successfully" });
      }
    });
  });
  

router.get("/api/update/transaction/:id", verifyUser, (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM client_transaction WHERE id =?";
    connection.query(query, [id], (err, result) => {
        if(err) {
            return res.status(500).json({ message: "Failed to fetch data" });
        } else {
            res.json(result);
        }
    })
});

// update transaction
router.get('/api/update/transaction/:id', verifyUser, (req, res) => {
    const id = req.params.id;
    const { name, number, type, kilo, price, transaction_date, date_received } = req.body;
    const query = "UPDATE client_transaction SET name = ?, number = ?, type = ?, kilo = ?, price = ?, transaction_date = ?, date_received = ? WHERE id = ?";
    const values = [name, number, type, kilo, price, transaction_date, date_received, id];
    connection.query(query, values, (err, result) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ message: "Failed to fetch data" });
        } else {
            res.json(result);
        }
    });
});

// update the status
router.put("/api/transaction/update/:id", verifyUser, (req, res) => {
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

router.get("/api/logout", verifyUser, (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/' // make sure this matches the path where the cookie was set
    });
    return res.status(200).json({ message: "Logged out successfully." });
  });
  

module.exports = router;