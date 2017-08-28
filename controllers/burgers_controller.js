// Dependencies
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

var path = require("path");

var db = require("../models");

//routes 
router.get("/", function(req, res) {
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
  var burgerId = req.params.id;
  db.Burger.update({
      devoured : true
    }, 
    {
      where: { 
        id: burgerId
      }
    }).then(function() {
        res.redirect('/burgers');
     });
});


module.exports = router;