const express = require("express");
const router = express.Router();
const { insertTask, getTasks, getTaskById } = require('../db');
const { checkJwt } = require('../middleware/auth'); // 导入JWT检查中间件

// 保护所有任务API路由,需要有效令牌
router.use(checkJwt);

// 获取所有任务
router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

// 表单路由 - 受保护
router.get('/newtask', checkJwt, (req, res) => {
  res.render('newtask');
});

// 获取单个任务
router.get("/:taskId", async (req, res) => {
  try {
    const id = req.params.taskId;
    const task = await getTaskById(id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    
    // 如果是API请求(接受JSON),返回JSON
    if (req.accepts('json')) {
      return res.json(task);
    }
    
    // 否则渲染模板
    res.render("task", task);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

// 创建新任务
router.post('/', async (req, res) => {
  try {
    const task = req.body;
    
    // 可以从令牌中获取用户信息并添加到任务中
    if (req.auth && req.auth.sub) {
      task.userId = req.auth.sub; // 添加用户ID到任务
    }
    
    const result = await insertTask(task);
    
    // 如果是API请求,返回JSON
    if (req.accepts('json')) {
      return res.status(201).json({ 
        message: "Task created successfully", 
        taskId: result.insertedId 
      });
    }
    
    // 否则重定向
    res.redirect('/api/tasks');
  } catch (err) {
    console.error("POST failed:", err);
    res.status(500).send("Error inserting task");
  }
});

module.exports = router;