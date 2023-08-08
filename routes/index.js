import { Router } from "express";
import { body } from "express-validator";
import controllers from "../controllers/index.js";

const router = Router();

router.get("/addTask", controllers.getAddTask);

router.post(
  "/addTask",
  [
    body("title")
      .trim()
      .isLength({ min: 5 })
      .withMessage("title should more than 5"),
    body("role")
      .trim()
      .isLength({ min: 5 })
      .withMessage("role should more than 5"),
  ],
  controllers.postAddTask
);

router.get("/", controllers.getTasks);

router.get("/taskDetails/:id", controllers.getTaskDetails);

router.get("/editTask/:id", controllers.geteditTask);

router.post(
  "/editTask",
  [
    body("title")
      .trim()
      .isLength({ min: 5 })
      .withMessage("title should more than 5"),
    body("role")
      .trim()
      .isLength({ min: 5 })
      .withMessage("role should more than 5"),
  ],
  controllers.posteditTask
);

router.get("/cancelTask/:id", controllers.getcancelTask);

export default router;
