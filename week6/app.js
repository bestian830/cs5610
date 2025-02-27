// // use writefile to write a text to a file
// const fs = require('fs');

// fs.writeFile("data.txt", "This is a message for you!", (err) => {if(err) {
//     console.log("write failed");
// } else {
//     console.log("write successful");
//     // read the message back and log it to the console.
//     fs.readFile("data.txt", "utf8", (err, data) => {
//         if(err) {
//             console.log("read failed");
//         } else {
//             console.log(data);
//         }
//     });
// }
// });


// const logger = require("./logger.js");
// // logger.log(logger);
// logger.log();
const db =require("./db.js");
console.log(db);
require("dotenv").config();
console.log(process.env);
const express = require('express');
// console.log(express);
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

const tasksRouter = require("./routes/tasks.js");
app.use("/tasks", tasksRouter);

app.get("/", (req,res)=> {
    // res is responsible for sending the response
    res.send("Hello and welcome to my site!");
})


// mounter the router from tasks.js in this line
// app.get("/tasks/:taskId", (req,res)=> {
//     console.log(req.params.taskId);
//     res.send(`<p>You are viewing task ${req.params.taskId}</p>`);
// })

port = 3000;

app.listen(port, function() {
    console.log("Example app listening on port ${port}!");
    // connect to the database
    console.log("Connected to the database...");
});