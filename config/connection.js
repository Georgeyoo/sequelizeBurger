// Dependencies
var mysql = require("mysql");

// Specify the port.
var port = 3000;

var connection;

// Connecting to Jaws DB for Heroku Deployment of DB
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
  		user: "root",
  		password: "",
  		database: "burgers_db"
	});
};

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
