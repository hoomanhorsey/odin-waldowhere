import { Router } from "express";
const scoreRouter = Router();


//TODO implement name validation

// // Validation
// const userValidator = require("../validators/userValidator");

// const verifyToken = require("../middleware/verifyToken.js");

// Controllers
const scoreController = require("../controllers/scoreController");


authRouter.post(
  "/saveScore",
  // userValidator.validateLogin,
  scoreController.saveScore,
);

// authRouter.post(
//   "/login",
//   userValidator.validateLogin,
//   authController.handleLogin,
// );
// authRouter.post(
//   "/signup",
//   userValidator.validateSignup,
//   authController.handleSignup,
// );
// authRouter.post(
//   "/logout",
//   verifyToken.verifyToken,
//   authController.handleLogout,
// );

exports default scoreRouter;
