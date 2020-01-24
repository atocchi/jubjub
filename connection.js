// Set up MySQL connection.
const mysql = require("mysql");
const keys = require('./keys')
//connection configuration 
const connection = mysql.createConnection(keys);

//Makes connection with DB
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export
module.exports = connection;