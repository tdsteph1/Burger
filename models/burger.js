//Import the orm to create function that will interact wiht the DB
//This allows us to utilize functions of (orm) object inside orm.js
var orm = require("../config/orm.js");

var burger = 
{
	selectAll: function(cb)
	{
		orm.selectAll("burgers", function(res)
		{
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb)
	{
		//invoke insertOne() function in (orm.js)
		orm.insertOne("burgers", cols, vals, function(res)
		{
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb)
	{
		//invoke orm object function inside (orm.js)
		orm.updateOne("burgers", objColVals, condition, function(res)
		{
			cb(res);
		});
	}

};

//Export for burger_controller
module.exports = burger;