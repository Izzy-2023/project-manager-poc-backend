const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectsRouter = require('./routes/projects');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/projects', projectsRouter);
app.use('/taskstasks', tasksRouter);

mongoose.connect('mongodb+srv://izzy-2023:islam1988@cluster0.osvhfet.mongodb.net/projects?retryWrites=true&w=majority', {

}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error', err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
