const db =require("./db.js");
// console.log(db);
require("dotenv").config();
// console.log(process.env);
const express = require('express');
// console.log(express);
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const tasksRouter = require("./routes/tasks.js");
app.use("/tasks", tasksRouter);

app.get("/", (req,res)=> {
    // res is responsible for sending the response
    res.send("Hello and welcome to my site!");
})

port = 3000;

app.listen(port, async function() {
    // console.log("Example app listening on port ${port}!");
    // connect to the database
    await db.connect();
    console.log("Connected to the database...");
    // db.addToDB({task:"Reading", user: "Alice"});
});