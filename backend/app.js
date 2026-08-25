//APP FROM previous project

// Dependencies & core modules
import express from "express";
// import cors from "cors";  ** Import later when frontend is running**
const app = express();

// Validation
// import { body, validationResult } from "express-validator";

// Route imports
import charactersRouter from "./routes/charactersRouter.js";
// import scoreRouter from "./routes/scoreRouter.js";

// app.use(cors()); // enables CORS for ALL routes

app.use(express.json());

// Route mounting
app.use("/characters", charactersRouter);
app.use("/score", scoreRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`WaldoWhere backend app in express - listening on port ${PORT}!`);
});
