const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks.js");
const { connect, insertTask } = require("./db.js");
const cors = require("cors");
require('dotenv').config(); // 加载环境变量

// 中间件：记录请求时间
app.use((req, res, next) => {
  console.log(`Request received at: ${new Date().toLocaleString()}`);
  next(); // 继续执行下一个中间件或路由
});

// 静态文件中间件
app.use(express.static("public"));
app.use(express.json()); // 解析 JSON 请求体
app.use(express.urlencoded({ extended: false })); // 解析表单数据
app.use(cors()); // 允许跨域请求

app.set("view engine", "pug");
app.set("views", "./views");

// 公开路由,不需要认证
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Site</h1>");
});

// 使用任务路由(已在routes/tasks.js中添加认证)
app.use('/api/tasks', tasksRouter);

app.use(express.static("public"));

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const port = 5001;
async function startServer() {
  try {
    await connect(); // 连接数据库
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      console.log(`Auth configuration: Domain=${process.env.AUTH0_DOMAIN}, Audience=${process.env.AUTH0_AUDIENCE}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
}

startServer();