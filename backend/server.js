import express from "express";
import { ENV_VARS } from "./config/envVar.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.get("/");

app.listen(PORT, () => {
  console.log("Server is started at http://localhost:" + PORT);
  connectDB();
});
