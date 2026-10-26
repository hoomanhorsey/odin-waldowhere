import { Router } from "express";
const scoreRouter = Router();

// Controllers
import scoreController from "../controllers/scoreController.js";

scoreRouter.post("/save-score", scoreController.saveScore);

export default scoreRouter;
