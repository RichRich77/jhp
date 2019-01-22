//requiring our Clothing model
var db = require("../models");
var Op = db.Sequelize.Op;
//routes
//exporting all routes
module.exports = function (app) {


    // ALL THE GET ROUTES ===============================================================
    //GET route for getting all of the clothings
    app.get("/api/shoppingcart", function (req, res) {
        db.Shoppingcart.findAll({}).then(function (dbShoppingcart) {
            res.json(dbShoppingcart);
        });
    });

    app.post("/api/shoppingcart", function (req, res) {
        db.Shoppingcart.create(req.body).then(function (dbShoppingcart) {
            res.json(dbShoppingcart);
        });
    });

    app.delete("/api/shoppingcart/:id", function (req, res) {
        db.Shoppingcart.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbShoppingcart) {
            res.json(dbShoppingcart);
        });

    });

};