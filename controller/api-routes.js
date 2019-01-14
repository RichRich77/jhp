//requiring our Clothing model
var db = require("../models");

//routes
//exporting all routes
module.exports = function(app) {

    //GET route for getting all of the clothings
    app.get("/api/clothing", function(req, res) {

        db.Clothing.findAll({}).then(function(dbClothing) {
            res.json(dbClothing);
        })
    });









}