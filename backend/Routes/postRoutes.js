const express = require("express");
const router = express.Router();
const { postRestaurant } = require("../Controllers/postRestaurantController");
const { postUser } = require("../Controllers/postUserController");

router.post("/", [], postRestaurant);
router.post("/user", [], postUser);

module.exports = router;
