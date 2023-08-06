import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const Task = model("Task", taskSchema);

export default Task;
