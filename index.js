import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const app = express();
dotenv.config();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

try {
  await mongoose.connect(process.env.DB_URI);
  app.listen(process.env.PORT);
} catch (err) {
  console.log(err);
}

export default app;
