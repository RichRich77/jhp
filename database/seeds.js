// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("../models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
var reset =  process.argv[2] === 'reset' ? { force: true } : {};
db.sequelize.sync(reset).then(function() {
  db.Clothing.create({
      clothing_type: "shirt",
      gender: "male",
      small_quantity: 100, 
      medium_quantity: 100,
      large_quantity: 100,
      color: "white",
      price: 54.99,
      image: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/09/11/57d5cb5e2599fe3e2a00776d/m_57d5cb5e2599fe3e2a00776e.jpg"
  }).then(function(dbClothing) {
      res.json(dbClothing);
  });
  db.Clothing.create({
    clothing_type: "short",
    gender: "male",
    small_quantity: 100, 
    medium_quantity: 100,
    large_quantity: 100,
    color: "black",
    price: 54.99,
    image: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/09/11/57d5cb5e2599fe3e2a00776d/m_57d5cb5e2599fe3e2a00776e.jpg"
}).then(function(dbClothing) {
    res.json(dbClothing);
});
  
});
