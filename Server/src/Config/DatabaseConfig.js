const mysql = require('mysql');

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'laundry_shop',
});

connection.connect((err) => {
    if(err) {
        console.error("Error connecting database", err.stack);
        return;
    } console.log("Successfully connected to mysql database", connection.threadId);

    if(connection.state === 'connected') {
        console.log("Mysql database is active.");
    } else{
        console.log("Mysql database is not active.");
    }
});

module.exports = connection;