import { Router } from "express";
import actions from "../controllers/index.js";

const router = Router();

router.get("/",actions.getIndex);

router.get("/addTask", actions.taskForm);

router.post("/addTask", actions.createTask);

router.get("/tasksList", actions.getTasks);

router.get("/cancelTask/:id", actions.cancelTask);

export default router;
