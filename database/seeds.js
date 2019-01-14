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
var reset = process.argv[2] === 'reset' ? { force: true } : {};
db.sequelize.sync(reset).then(function () {
  //1
  db.Clothing.create({
    clothing_type: "shirt",
    gender: "men",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "white",
    price: 54.99,
    image: "https://dtpmhvbsmffsz.cloudfront.net/posts/2016/09/11/57d5cb5e2599fe3e2a00776d/m_57d5cb5e2599fe3e2a00776e.jpg"
  });
  //2
  db.Clothing.create({
    clothing_type: "short",
    gender: "men",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "black",
    price: 49.99,
    image: "https://i.pinimg.com/originals/91/50/16/915016f39ce37982cbd6eb3137bc3dfd.jpg"
  });
  //3
  db.Clothing.create({
    clothing_type: "pant",
    gender: "men",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "blue",
    price: 74.99,
    image: "http://www.mychicagoathlete.com/wp-content/uploads/LM5421S_0001_1.jpeg"
  });
  //4
  db.Clothing.create({
    clothing_type: "sock",
    gender: "men",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "blue",
    price: 14.99,
    image: "https://i.pinimg.com/736x/c1/60/4b/c1604b1169e942a3777c0a8715d20513--lululemon-men-lulu-lemon.jpg"
  });
  //5
  db.Clothing.create({
    clothing_type: "underwear",
    gender: "men",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "red",
    price: 19.99,
    image: "https://storage.googleapis.com/lulu-fanatics/product/35841/1280/lululemon-no-boxer-boxer-river-cut-cape-red-rugged-blue-025260-216772.jpg"
  });
  //6
  db.Clothing.create({
    clothing_type: "shirt",
    gender: "women",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "white",
    price: 54.99,
    image: "http://www.onajkarlo.com/wp-content/uploads/2017/12/womens-long-sleeves-lululemon-swiftly-tech-long-sleeve-crew-blackwhite.jpg"
  });
  //7
  db.Clothing.create({
    clothing_type: "short",
    gender: "women",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "black",
    price: 49.99,
    image: "https://i.pinimg.com/originals/b5/c5/b7/b5c5b7cda3d66e606caae248b6e2ab7d.jpg"
  });
  //8
  db.Clothing.create({
    clothing_type: "pant",
    gender: "women",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "blue",
    price: 74.99,
    image: "https://images.lululemon.com/is/image/lululemon/LW5AYNS_035653_1?$image_carousel-lg$"
  });
  //9
  db.Clothing.create({
    clothing_type: "sock",
    gender: "women",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "red",
    price: 14.99,
    image: "https://images.lululemon.com/is/image/lululemon/LW9BH3S_036277_1?$product_tile-lg$"
  });
  //10
  db.Clothing.create({
    clothing_type: "underwear",
    gender: "women",
    small_quantity: 100,
    medium_quantity: 100,
    large_quantity: 100,
    color: "red",
    price: 19.99,
    image: "https://cdn-img-1.wanelo.com/p/59d/ce9/e9a/4b76cc05fafd5d84713e68f/x354-q80.jpg"
  });
});
