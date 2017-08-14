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
    // res.render("index.handlebars");
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll()
  .then(function(data) {
    res.render("index.handlebars", {burger: data});
  })
})

// Create
router.post("/", function(req, res) {
	db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(dbPost) {
    res.redirect("/");
  });
});

// Update
router.put("/:id", function(req, res) {
  var theId = req.params.id;
  db.Burger.update(
          {devoured : true}, {where: { id: theId}}
     ).then(function() {
          res.redirect('/burgers');
     });
});


module.exports = router;