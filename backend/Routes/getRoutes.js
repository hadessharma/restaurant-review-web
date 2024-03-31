const express = require("express");
const router = express.Router();

const {
  getAllRestaurant,
  getAllUser,
} = require("../Controllers/getController");


router.get("/reviewList", [], getAllRestaurant);
router.get("/userreviewList", [], getAllUser);

module.exports = router;
