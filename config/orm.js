//import MySQL connection
var connection = require("../config/connection.js");

//Object for all our SQL statements
var orm = 
{
	//Display everthing currently in the database/ burgers TABLE
	selectAll: function(tableInput, cb)
	{
		var queryString = "SELECT * FROM " + tableInput + ";";

		connection.query(queryString, function(err, result)
		{
			if(err)
			{
				throw err;
			}

			//without this then we would not have reload with updates on page
			cb(result);

		});


	},

	//SQL table(burgers), cols or properites(burger_name, dev), vals(BigMac, 0) cb(function(result) on controller page)
	insertOne: function(table, cols, vals, cb)
	{
		var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?, ?)";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result)
		{
			if(err)
			{
				throw err;
			}

			//without this, we prevent the reload from occuring
			cb(result);

		});


	},

	//updates the devour burger by setting it to true and places devoured burger in devoured list
	updateOne: function(table, objColVals, condition, cb)
	{
		var queryString = "UPDATE " + table + " SET devoured=true WHERE " + condition;

		console.log(queryString);

		connection.query(queryString, function(err, result)
		{
			if(err)
			{
				throw err;
			}

			cb(result);
		});
	}
};

//Export for (burger.js)
module.exports = orm;