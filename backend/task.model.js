const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    assignedTo: String,
    status: { type: String, enum: ['Completed', 'In Progress', 'Not Started'] },
    dueDate: Date,
    priority: { type: String, enum: ['Low', 'Normal', 'High'] },
    comments: String
});

module.exports = mongoose.model('Task', TaskSchema);
