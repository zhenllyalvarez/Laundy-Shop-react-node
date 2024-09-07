require('dotenv').config();
const express = require("express");
const path = require('path');
const cors = require('cors');
const transactionDetails = require('./src/Routes/ClientRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// route
app.use(transactionDetails);

app.get("/", (req, res) => {
    res.send("This is good");
});

const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;