import mongoose from "mongoose";

const achievementSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    default: "",
  },
  organization: { type: String },
  time: { type: String },
});

export const Achievement = mongoose.model("Achievement", achievementSchema);
