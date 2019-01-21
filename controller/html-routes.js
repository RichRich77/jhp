var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //this will run the login page
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });
  
  //this will run the shoppingcart page
  app.get("/shoppingcart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shoppingcart.html"));
  })

  //
  app.get("/ourvision", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ourvision.html"));
  });

  app.get("/women", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/women.html"));
  });

  app.get("/women/bestsellers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/womenbestseller.html"));
  });

  app.get("/women/tops", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/womentops.html"));
  });

  app.get("/women/bottoms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/womenbottoms.html"));
  });

  app.get("/women/accessories", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/womenaccessories.html"));
  });

  app.get("/men", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/men.html"));
  });

  app.get("/men/bestsellers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menbestseller.html"));
  });

  app.get("/men/tops", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mentops.html"));
  });

  app.get("/men/bottoms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menbottoms.html"));
  });

  app.get("/men/accessories", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menaccessories.html"));
  });

  app.get("/community", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/community.html"));
  });

  app.get("/bot", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/bot.html"));
  });

};