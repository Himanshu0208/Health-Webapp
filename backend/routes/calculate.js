const express = require("express");
const router = express.Router();

const { calculate } = require("../controllers/calculate");

router.route("/calculate").post(calculate);

module.exports = router;
