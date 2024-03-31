const express = require("express");
const router = express.Router();

const {
  getAllRestaurant,
  getUserRestaurants,
} = require("../Controllers/getController");


router.get("/reviewList", [], getAllRestaurant);
router.get("/userReviewList", [], getUserRestaurants);

module.exports = router;
