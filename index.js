import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use(express.static("views"));

app.use(routes);

app.listen(3000);