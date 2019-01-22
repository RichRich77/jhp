//requiring our Clothing model
var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function(app) {

    //GET route for getting all of the users 
    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // POST route to create a new user 
    app.post("/api/users", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // DELETE route to destroy a user based on id number
    app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbUser) {
          res.json(dbUser);
        });
      });
}