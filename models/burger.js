// var orm = require("../config/orm.js");

// // module.exports =;
// var burger = {
// 	all: function(cb) {
// 		orm.selectAll("burgers", function(res) {
// 			cb(res);
// 		});
// 	},

// 	insert: function(cols, vals, cb) {
// 		orm.insertOne(cols, vals, function(res) {
// 			cb(res);
// 		});
// 	},

// 	update: function(objColVal, condition, cb) {
// 		orm.updateOne(objColVal, condition, function(res) {
// 			cb(res);
// 		});

// 	}

// }

// module.exports = burger;

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: DataTypes.DATE,
      // defaultValue: "CURRENT_TIME"
    }
  });
  return Burger;
};
