import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import dotenv from "dotenv";
dotenv.config();
import movieRoutes from "./routes/movie";
const app = express();

// middleWares
app.use(express.json());
app.use(cors());

// Routes
app.use("/movies", movieRoutes);

const MONGO_URI = process.env.MONGO_URI || "";

app.get("/", (req: Request, res: Response) => {
  res.send("hello from express");
});

connectDB(MONGO_URI);

app.listen(8022, () => {
  console.log("server is running at 8022");
});
