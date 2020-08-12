// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        // process.env.LOCAL_PASSWORD
        password: 'marksql#15',
        database: 'meals_db'
    })
};
// Export connection for our ORM to use.
module.exports = connection;
