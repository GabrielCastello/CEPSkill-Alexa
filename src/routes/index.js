const express = require("express");
const router = express.Router();

const { getCEP } = require("../controllers/routesController/viaCepRouteController");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/getCEP", getCEP);

module.exports = router;
