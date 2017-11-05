//set up MySQL connection
var mysql = require("mysql");

/*
var connection = mysql.createConnection({

	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"


});
*/
if(process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	var connection = mysql.createConnection(
	{

		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"


	});
}

//Make connection
connection.connect(function(err)
{
	if(err)
	{
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id: " + connection.threadId);

});

//Export connectoin for our ORM to use
module.exports = connection;