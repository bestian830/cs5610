const express = require("express");
const router = express.Router();
const { insertTask, getTasks, getTaskById } = require('../db');

router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

router.get('/newtask', (req, res) => {
  res.render('newtask');
});

router.get("/:taskId", async (req, res) => {
  try {
    const id = req.params.taskId;
    const task = await getTaskById(id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.render("task", task);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

router.post('/', async (req, res) => {
  try {
    const task = req.body;
    await insertTask(task);
    res.redirect('/api/tasks');
  } catch (err) {
    console.error("POST failed:", err);
    res.status(500).send("Error inserting task");
  }
});

module.exports = router;
