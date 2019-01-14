//requiring our Clothing model
var db = require("../models");
var Op = db.Sequelize.Op;
//routes
//exporting all routes
module.exports = function(app) {

    //GET route for getting all of the clothings
    app.get("/api/clothing", function(req, res) {
        db.Clothing.findAll({}).then(function(dbClothing) {
            res.json(dbClothing);
        })
    });
    //GET route for getting a specific clothing based on id number 
    app.get("/api/clothing/:id", function(req, res) {
        db.Clothing.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        })
    });
    //GET route for selecting all men clothing
    app.get("/api/clothing/gender/men", function(req, res) {
        db.Clothing.findAll({
            where: {
                gender: "men"
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        })
    });
    //GET route for selecting all women clothing
    app.get("/api/clothing/gender/women", function(req, res) {
        db.Clothing.findAll({
            where: {
                gender: "women"
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        });
    });
    // GET route based on color
    app.get("/api/clothing/color/:color", function(req, res) {
        db.Clothing.findAll({
            where: {
                color: req.params.color
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        });
    });
    //GET route based on clothing
    app.get("/api/clothing/clothing_type/:clothing_type", function(req, res) {
        db.Clothing.findAll({
            where: {
                clothing_type: req.params.clothing_type
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        });
    });
    // GET route based on size 
    app.get("/api/clothing/small_quantity/small", function(req, res) {
        db.Clothing.findAll({
            where: {
                small_quantity: {
                    [Op.gt]: 0
                }
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        });
    });
    app.get("/api/clothing/medium_quantity/medium", function(req, res) {
        db.Clothing.findAll({
            where: {
                medium_quantity: {
                    [Op.gt]: 0
                }
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        });
    });
    app.get("/api/clothing/large_quantity/large", function(req, res) {
        db.Clothing.findAll({
            where: {
                large_quantity: {
                    [Op.gt]: 0
                }
            }
        }).then(function(dbClothing) {
            res.json(dbClothing);
        });
    });










}