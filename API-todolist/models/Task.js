const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    id: {     type: String },
    task: {   type: String, required: true },
    status: { type: String, required: true },
    created: {type: String,  }
  },
  { timestamps: true }
);

const Task = mongoose.model('tarefas', TaskSchema);
module.exports = Task;