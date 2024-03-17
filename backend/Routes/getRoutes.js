const express = require("express");
const router = express.Router();

const { getAll } = require("../Controllers/getController");
router.get("/reviewList", [], getAll);

module.exports = router;
