import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import emojiRoutes from "./routes/emojiRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/emojis", emojiRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Emojis API");
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const port = process.env.PORT || 5000;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => console.log(`Servidor activo en puerto: ${port}`))
  )
  .catch((error) => console.log(`${error} : No se pudo conectar`));
