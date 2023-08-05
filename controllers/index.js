import Task from "../models/task.js";

const getTasks = async (req, res) => {
  try {
    const data = await Task.find();
    res.render("allTasks", { tasks: data, path: "/" });
  } catch (err) {
    console.log(err);
  }
};

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

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Task.findById(id);
    res.render("editTask", { path: "/addTask", task: data });
  } catch (err) {
    console.log(err);
  }
};

const editTask = async (req, res) => {
  try {
    const { id, title } = req.body;
    const data = await Task.findById(id);
    data.title = title;
    await data.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const cancelTask = async (req, res) => {
  try {
    const id = req.params.id;
    await Task.findOneAndDelete(id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const actions = {
  taskForm,
  createTask,
  getTasks,
  cancelTask,
  getTask,
  editTask,
};

export default actions;
