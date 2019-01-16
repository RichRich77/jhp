var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  // index route loads view 

  //this will run the login page
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });
  
  //this will run the shoppingcart page
  app.get("/shoppingcart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shoppingcart.html"));
  })

  //
};