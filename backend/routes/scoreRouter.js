import { Router } from "express";
const scoreRouter = Router();

//TODO implement name validation

// // Validation
// const userValidator = require("../validators/userValidator");

// const verifyToken = require("../middleware/verifyToken.js");

// Controllers
import scoreController from "../controllers/scoreController.js";

// for testing as get
//http://localhost:3000/score/save-score?name=spanky&elapsedTime=234234

scoreRouter.get(
  "/save-score",
  // userValidator.validateLogin,
  scoreController.saveScore,
);

// scoreRouter.post(
//   "/save-score",
//   // userValidator.validateLogin,
//   scoreController.saveScore,
// );

export default scoreRouter;
