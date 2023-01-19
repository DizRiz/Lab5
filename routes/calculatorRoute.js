const express = require("express");
var calculatorController = require("../controllers/calculatorController");
var router = express.Router();

router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});
router.get("/sub", (req, res) => {
  calculatorController.subNumbers(req, res);
});
router.get("/multi", (req, res) => {
  calculatorController.multiNumbers(req, res);
});
router.get("/div", (req, res) => {
  calculatorController.divNumbers(req, res);
});

module.exports = router;
