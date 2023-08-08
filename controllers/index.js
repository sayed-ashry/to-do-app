import { validationResult } from "express-validator";
import Task from "../models/task.js";

const getAddTask = (req, res, next) =>
  res.render("editTask", {
    path: "/addTask",
    validationErrors: [],
    task: {},
    editing: false,
  });

const postAddTask = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("editTask", {
        path: "/addTask",
        task: { ...req.body },
        validationErrors: errors.array(),
        editing: false,
      });
    }
    const { title, role } = req.body;
    const task = new Task({ title: title, role: role });
    await task.save();
    res.redirect("/");
  } catch (err) {
    const error = new Error(err);
    next(error);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const data = await Task.find();
    res.render("allTasks", { tasks: data, path: "/", editing: false });
  } catch (err) {
    const error = new Error(err);
    next(error);
  }
};

const getTaskDetails = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Task.findById(id);
    res.render("taskDetail", { path: "/", item: data, editing: false });
  } catch (err) {
    const error = new Error(err);
    next(error);
  }
};

const geteditTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Task.findById(id);
    res.render("editTask", {
      path: "/addTask",
      editing: true,
      task: data,
      validationErrors: [],
    });
  } catch (err) {
    const error = new Error(err);
    next(error);
  }
};

const posteditTask = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("editTask", {
        path: "/addTask",
        validationErrors: errors.array(),
        task: { ...req.body },
        editing: true,
      });
    }
    const { id, title, role } = req.body;
    const data = await Task.findById(id);
    data.title = title;
    data.role = role;
    await data.save();
    res.redirect("/");
  } catch (err) {
    const error = new Error(err);
    next(error);
  }
};

const getcancelTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndRemove(id);
    res.redirect("/");
  } catch (err) {
    const error = new Error(err);
    next(error);
  }
};

const controllers = {
  getAddTask,
  postAddTask,
  getTasks,
  getTaskDetails,
  getcancelTask,
  geteditTask,
  posteditTask,
};

export default controllers;
