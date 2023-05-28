const express = require("express");
const router = express.Router();

const AuthController = require("../controller/authController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/refresh-token", AuthController.refreshToken);
module.exports = router;
