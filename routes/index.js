import { Router } from "express";
import actions from "../controllers/index.js";

const router = Router();

router.get("/", actions.getTasks);

router.get("/task", actions.getTask);

export default router;
