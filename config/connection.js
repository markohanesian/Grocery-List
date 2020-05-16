// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.JAWSDB_HOST,
  port: 3306,
  user: process.env.JAWSDB_USERNAME,
  password: process.env.JAWSDB_PASSWORD,
  database:  process.env.JAWSDB_DATABASE
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
