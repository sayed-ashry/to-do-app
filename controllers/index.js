import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));

const getTasks = (req, res) => {
  const p = join(dir, "../", "public", "views", "tasks.html");
  res.sendFile(p);
};

const getTask = (req, res) => {
  const p = join(dir, "../", "public", "views", "taskdetail.html");
  res.sendFile(p);
};

const actions = {
  getTasks,
  getTask,
};

export default actions;
