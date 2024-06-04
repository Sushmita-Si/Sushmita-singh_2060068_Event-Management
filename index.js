import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/message", messageRouter);
dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
