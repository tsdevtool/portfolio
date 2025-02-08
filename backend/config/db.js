import mongoose from "mongoose";
import { ENV_VARS } from "./envVar.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB Connected: " + conn.connection.host);
  } catch (error) {
    console.log("Error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};
