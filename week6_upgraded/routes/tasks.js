const express = require("express");
const router = express.Router();
const axios = require("axios");
const { insertTask } = require('../db');

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

router.get('/newtask', (req, res) => {
  res.render('newtask');
});

router.post('/', async (req, res) => {
  try {
    const task = req.body; // 从请求体中获取任务
    await insertTask(task);
    res.redirect('/tasks/newtask');
  } catch (err) {
    console.error("POST failed:", err);
    res.status(500).send("Error inserting task");
  }
});

router.get("/:taskId", async (req, res) => {
  try {
    const id = req.params.taskId;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    res.render("task", {
      id: response.data.id,
      title: response.data.title,
      completed: response.data.completed,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

router.post('/', async (req, res) => {
  try {
    const task = req.body; // 从请求体中获取任务
    await insertTask(task);
    res.redirect('/tasks');
  } catch (err) {
    console.error("POST failed:", err);
    res.status(500).send("Error inserting task");
  }
});

module.exports = router;
