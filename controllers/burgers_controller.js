// Dependencies
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

var path = require("path");

var db = require("../models");

//routes 

// What is this?
//Get
router.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname, "../public/blog.html"));
    res.render("index.handlebars");
});

// Create
router.post("/", function(req, res) {
	db.Burger.create([
		"burger_name", "devoured"
		], [
		req.body.burger_name, req.body.devoured
		], function() {
			res.redirect("/");	
		});
});

// Update
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


module.exports = router;