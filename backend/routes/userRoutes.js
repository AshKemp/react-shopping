const express = require("express");
const router = express.Router();
const { authUser, getUserProfile } = require("../controller/userController.js");
const { protect } = require("../middleware/authMiddleware");

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
