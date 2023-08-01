import { Router } from "express";
import actions from "../controllers/index.js";

const router = Router();

router.get("/", actions.addTask);

router.post("/addTask", actions.createtask);

export default router;
