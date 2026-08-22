const { Router } = require("express");
const authRouter = Router();

// Validation
const userValidator = require("../validators/userValidator");

const verifyToken = require("../middleware/verifyToken.js");

// Controllers
const authController = require("../controllers/authController");

authRouter.post(
  "/login",
  userValidator.validateLogin,
  authController.handleLogin,
);
authRouter.post(
  "/signup",
  userValidator.validateSignup,
  authController.handleSignup,
);
authRouter.post(
  "/logout",
  verifyToken.verifyToken,
  authController.handleLogout,
);

module.exports = authRouter;
