var express = require("express");

//(router) will get imported by (server.js)
var router = express.Router();

//import the model(burger.js) to use its database functions
var burger = require("../models/burger.js");

//GET
//create all our routes and set up logic within those routes where required
router.get("/", function(req, res)
{
	burger.selectAll(function(data)
	{
		var burgerObject =
		{
			burgers: data
		}

		console.log(burgerObject);

		//send object that contains data(array of TABLE objects inside DB)
		res.render("index", burgerObject);
	});

});

//POST
//runs concurrently with $.ajax/POST
router.post("/api/burgers", function(req, res)
{
	//here we are invoking insertOne() function inside (models/burger.js)
	burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result)
	{
		//Triggers $.ajax/.done(function() in order to reload page with updates
		res.json({

			id: result.insertId
		});

	});
});

//PUT
router.put("/api/burgers/:id", function(req, res)
{
	//store id of selected devoured button inside condition
	var condition = "id = " + req.params.id;



	console.log("condition", condition);

	//invoke burger object functionand pass in 3 parameters
	burger.updateOne(
	{
		devoured: req.body.devoured

	},

	condition,

	//result contains an array of TABLE objects in mySQL
	function(result)
	{
		if(result.changedRows == 0)
		{
			//ERROR
			return res.status(404).end();
		}
		else
		{
			//this executes if NO ERROR occures
			res.status(200).end();
		}
	});
});


//Export routes for server.js to use.
module.exports = router;