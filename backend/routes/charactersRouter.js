import { Router } from "express";
const charactersRouter = Router();

// Controllers
import charactersController from "../controllers/charactersController.js";

charactersRouter.get("/names", charactersController.getNames);

charactersRouter.get("/verify-location", charactersController.verifyLocation);
charactersRouter.get(
  "/verify-character-guess",
  charactersController.verifyCharacterGuess,
);

export default charactersRouter;
