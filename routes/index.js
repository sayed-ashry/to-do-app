import { Router } from "express";
import { getTasks } from "../controllers/index.js";

const router = Router();

router.get("/", getTasks);
export default router;
