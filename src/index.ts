// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { test } from "./controller/test";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/test", (req: Request, res: Response) => {
  res.send(test());
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
