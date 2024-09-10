require('dotenv').config();
const express = require("express");
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const transactionDetails = require('./src/Routes/ClientRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(transactionDetails);

app.get("/", (req, res) => {
    res.send("This is good");
});

// Fallback error handler (optional but useful)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
