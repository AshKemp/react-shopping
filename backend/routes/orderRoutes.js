const express = require("express");
const router = express.Router();
const { addOrderItems } = require("../controller/orderController.js");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, addOrderItems);

module.exports = router;
