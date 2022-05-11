var express = require("express");
var router = express.Router();

/* GET home page. */
function index(connection, Models) {
  router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
  });

  return router;
}

module.exports = index;
