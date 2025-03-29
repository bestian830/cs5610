const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks.js");
const { connect, insertTask } = require("./db.js");
const cors = require("cors");

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

app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Site</h1>");
});

app.use('/api/tasks', tasksRouter);

app.use(express.static("public"));

const port = 5001;
async function startServer() {
  try {
    await connect(); // 连接数据库
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
}

startServer();