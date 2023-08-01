const addTask = (req, res) => {
  res.render("index");
};

const createtask = (req, res) => {
  const task = req.body.task;
  console.log(task)
  res.render("createtask", { task: task });
};

const actions = {
  addTask,
  createtask,
};

export default actions;
