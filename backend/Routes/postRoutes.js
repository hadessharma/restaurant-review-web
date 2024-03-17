const express = require("express");
const router = express.Router();
const { postRestaurant } = require("../Controllers/postRestaurantController");

router.post("/", [], postRestaurant);

module.exports = router;