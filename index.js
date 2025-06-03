import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import weatherRouter from "./src/routes/weather.route.js";
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", weatherRouter);

app.listen(3001, () => {
  console.log("Proxy server running on http://localhost:3001");
});
