$(function()
{

	//click [SUBMIT] burger
	$(".create-form").on("submit", function(event)
	{
		//prevent submit event
		event.preventDefault();

		//new burger object that gets pasted in the list
		var newBurger = 
		{
			burger_name: $("#bu").val().trim(),

			//optional
			devoured: "0"	//false
		};

		//send the POST request
		//this runs concurrently with (burgers_controller)/rout.post(...)
		$.ajax("/api/burgers",
		{
			type: "POST",
			data: newBurger

		}).then(function()
		{
			console.log("created new burger");

			//reload the page to get the updated list
			location.reload();
		});

	});


	//click [Devour it!] button which updates devour=1 & relocates vurger to the devour list
	$(".devour").on("click", function(event)
	{
		
		event.preventDefault();

		var id = $(this).data("id");
		console.log("this id " + id);

		var newDevourState =
		{
			devoured: true
		};

		//end the PUT request
		$.ajax("/api/burgers/" + id,
		{
			type: "PUT",
			data: newDevourState

		}).then(function()
		{
			console.log("changed the devour state to " + true);

			//reload page
			location.reload();
		});


	});



});