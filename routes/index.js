import { Router } from "express";
import actions from "../controllers/index.js";

const router = Router();

router.get("/", actions.getTasks);

router.get("/addTask", actions.taskForm);

router.post("/addTask", actions.createTask);

router.get("/editTask/:id", actions.getTask);

router.post("/editTask", actions.editTask);

router.get("/cancelTask/:id", actions.cancelTask);





export default router;
