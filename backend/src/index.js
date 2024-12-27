import express from "express";
import dotenv from "dotenv";
import meRoutes from "./routes/me.route.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use("/api/me", meRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
