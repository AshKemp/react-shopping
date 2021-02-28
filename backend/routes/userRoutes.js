const express = require("express");
const router = express.Router();
const { authUser } = require("../controller/userController.js");

router.post("/login", authUser);

module.exports = router;
