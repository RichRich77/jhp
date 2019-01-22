//requiring our Clothing model
var db = require("../models");
var Op = db.Sequelize.Op;
//routes
//exporting all routes
module.exports = function (app) {


    // ALL THE GET ROUTES ===============================================================
    //GET route for getting all of the clothings
    app.get("/api/clothing", function (req, res) {
        db.Clothing.findAll({}).then(function (dbClothing) {
            res.json(dbClothing);
        })
    });
    //GET route for getting a specific clothing based on id number 
    app.get("/api/clothing/:id", function (req, res) {
        db.Clothing.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        })
    });

    //GET route based on clothing type
    app.get("/api/clothing/clothing_type/:clothing_type", function (req, res) {
        db.Clothing.findAll({
            where: {
                clothing_type: req.params.clothing_type
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });

    //GET route for selecting all men clothing
    app.get("/api/clothing/gender/men", function (req, res) {
        db.Clothing.findAll({
            where: {
                gender: "men"
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        })
    });
    //GET route for selecting all women clothing
    app.get("/api/clothing/gender/women", function (req, res) {
        db.Clothing.findAll({
            where: {
                gender: "women"
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });

    // GET route based on item size that have a quantity greater than 0 
    app.get("/api/clothing/small_quantity/small", function (req, res) {
        db.Clothing.findAll({
            where: {
                small_quantity: {
                    [Op.gt]: 0
                }
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });
    app.get("/api/clothing/medium_quantity/medium", function (req, res) {
        db.Clothing.findAll({
            where: {
                medium_quantity: {
                    [Op.gt]: 0
                }
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });
    app.get("/api/clothing/large_quantity/large", function (req, res) {
        db.Clothing.findAll({
            where: {
                large_quantity: {
                    [Op.gt]: 0
                }
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });

    // GET route based on color
    app.get("/api/clothing/color/:color", function (req, res) {
        db.Clothing.findAll({
            where: {
                color: req.params.color
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });


    // GET route for any clothing under $50 
    app.get("/api/clothing/price/lowprice", function (req, res) {
        db.Clothing.findAll({
            where: {
                price: {
                    [Op.lte]: 50.00
                }
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });

    // GET route for any clothing above $50
    app.get("/api/clothing/price/highprice", function (req, res) {
        db.Clothing.findAll({
            where: {
                price: {
                    [Op.gt]: 50.00
                }
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });

    // GET route for reviews
    app.get("/api/clothing/review/:review", function (req, res) {
        db.Clothing.findAll({
            where: {
                review: {
                    [Op.gte]: parseFloat(req.params.review),
                }
            }
        }).then(function (dbClothing) {
            res.json(dbClothing);
        });
    });




    // PUT (UPDATE) ROUTES ===========================================================
    app.put("/api/clothing", function (req, res) {
        db.Clothing.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbClothing) {
                res.json(dbClothing);
            });
    });
};