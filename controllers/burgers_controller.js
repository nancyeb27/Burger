var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
router.get("/", function(req, res) {
res.redirect("/burgers");
});
// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.get("*", function (req, res) {
//   burger.all(function (data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// Our POST request to add a burger to the database
//EXPRESS POST ROUTE
router.post('/api/create', function (req, res) {
  burger.insertOne([
    'burger_name', "devoured"], 
    [req.body.burger_name, req.body.devoured],
     function (result) {
    res.json({id: result.insertId});
    res.redirect("/");
  });
});

//EXPRESS PUT ROUTE
router.put('/api/burgers/:id', function (req, res) {
  var condition =  "id =" + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured 
  }, condition, function (data) {
       res.redirect("/");
  
  });
});

// Export routes for server.js to use.
module.exports = router;