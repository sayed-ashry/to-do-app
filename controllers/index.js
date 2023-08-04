import Task from "../models/task.js";

const getIndex = (req, res) => res.render("home", { path: "/" });

const taskForm = (req, res) => res.render("addTask", { path: "/addTask" });

const createTask = async (req, res) => {
  try {
    const title = req.body.title;
    const task = new Task({ title: title });
    await task.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const getTasks = async (req, res) => {
  try {
    const result = await Task.find();
    res.render("allTasks", { tasks: result, path: "/tasksList" });
  } catch (err) {
    console.log(err);
  }
};

const cancelTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Task.findOneAndDelete(id);
    res.redirect("/tasksList");
  } catch (err) {
    console.log(err);
  }
};

const actions = {
  taskForm,
  createTask,
  getTasks,
  getIndex,
  cancelTask,
};

export default actions;
