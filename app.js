import dotenv from "dotenv";
import express from "express";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.set("view engine", "ejs");

app.set("views", "views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT);
