var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
   burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    console.log(result)
    console.log("inserted new burger")
    res.json({ id: result.insertId });
    
  });
});

router.put("/burgers/:id", function(req, res) {

  burger.updateOne(req.params.id, function(result) {
   console.log(result)
      res.status(200).end();
    })
})

module.exports = router;

