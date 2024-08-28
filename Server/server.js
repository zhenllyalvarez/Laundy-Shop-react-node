const express = require("express");
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(express,express.json());
app.use(cors());

// Static files
app.use(express.static(path.join(__dirname, "public")));


const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;