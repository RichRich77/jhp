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

    app.get("/api/nfkjn", function (req, res) {
        db.Clothing.create({
            clothing_type: "shirt",
            gender: "men",
            small_quantity: 100,
            medium_quantity: 100,
            large_quantity: 100,
            color: "white",
            price: 54.99,
            review: 5,
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
            review: 5,
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
            review: 5,
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
            review: 4,
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
            review: 4.5,
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
            review: 4.5,
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
            review: 5,
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
            review: 4,
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
            review: 4.8,
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
            review: 5,
            image: "https://cdn-img-1.wanelo.com/p/59d/ce9/e9a/4b76cc05fafd5d84713e68f/x354-q80.jpg"
        });
        res.end()
    })

};