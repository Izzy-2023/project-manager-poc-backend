const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }
});

module.exports = mongoose.model('Task', taskSchema);
