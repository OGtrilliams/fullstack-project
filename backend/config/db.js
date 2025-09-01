import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://resumebuilder:DGSJGEwIo84XlwXM@cluster0.rodt2io.mongodb.net/RESUME"
    )
    .then(() => console.log("DB CONNECTED"));
};
