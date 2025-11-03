import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

dotenv.config({ path: "./config/dev.env" });
const port = process.env.PORT;
const host = process.env.HOST;
const mongo_db_url = process.env.Mongo_DB_URL;
// console.log("MongoDB URL:", mongo_db_url); //Debugging  mongo_db_url

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Application root request" });
});

mongoose
  .connect(mongo_db_url, {})
  .then((resp) => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
  });

app.listen(port, host, (error) => {
  if (error) throw error;
  console.log(`Server running at http://${host}:${port}`);
});
