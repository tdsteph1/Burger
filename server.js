//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//import routes & give the server access to them
var routes = require("./controllers/burgers_controller.js");

//set up server
var PORT = process.env.PORT || 3000;
var app = express();

//server static content for app from the "public" directory in the application directory
app.use(express.static("public"));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//After routes has been imported give the server access to them
app.use("/", routes);

app.listen(PORT);