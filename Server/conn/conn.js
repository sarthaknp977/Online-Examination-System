import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection failed" + error.message);
  });
