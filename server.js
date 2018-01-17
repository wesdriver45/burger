var express = require("express");
var methodOveride = require("method-overide");
var bodyParser = require("body-parser");

var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PROT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ etended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});


