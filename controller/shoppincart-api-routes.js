//requiring our Clothing model
var db = require("../models");
var Op = db.Sequelize.Op;
//routes
//exporting all routes
module.exports = function(app) {


// ALL THE GET ROUTES ===============================================================
    //GET route for getting all of the clothings
    app.get("/api/shoppingcart", function(req, res) {
        db.Clothing.findAll({}).then(function(dbClothing) {
            res.json(dbClothing);
        })
    });
};