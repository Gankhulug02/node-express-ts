import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello from express");
});

app.listen(8022, () => {
  console.log("server is running at 8022");
});
