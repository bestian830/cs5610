// responseible for all routing related to tasks
const express = require('express');
const router = express.Router();
const axios = require('axios');
// const { addToDB } = require('../db');
const db = require('../db');

router.post("/", async (req,res)=> {
    try {
        console.log("req.body", req.body);
        // await addToDB(req.body);
        await db.addToDB(req.body);
        res.redirect("/tasks");
        
        // res.send("data received");
    }
    catch (err) {
        res.status(500).send(err.message);
    }  
});

// router.get("/", async (req,res)=> {
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
//         // console.log(response.data);
//         res.json(response.data);
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
    
// })

router.get("/", async(req,res)=> {
    try {
        const tasks = await db.getAllTasks();
        res.render("allTasks", {tasks});
    } catch (err) {
        console.error("Failed to read from database", err);
        res.status(500).send(err.message);
    }
});

// show the form to add a  new task
router.get("/newtask", function (req, res) {
    res.render("taskForm");
});



// router.get("/:taskId", async (req,res)=> {
//     // console.log(req.params.taskId);
//     try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
//         // res.json(response.data);
//         // console.log(promise);
//         // console.log(req.params.taskId);
//         // res.send(`<p>You are viewing task ${req.params.taskId}</p>`);
//         res.render("task", {
//             id : req.params.taskId,
//             title : response.data.title,
//             completed : response.data.completed,
//             userName : response.data.userId});
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// });

router.get("/:taskId", async (req,res)=> {
    const taskId = req.params.taskId;
    try {
        const task = await db.getTaskById(taskId);
        if (!task) {
            return res.status(404).send("Task not found in DB");
        }

        res.render("task", {
            _id: task._id,
            task: task.task,
            user: task.user
        });
    } catch (err) {
        console.error("Failed to read from database", err);
        res.status(500).send(err.message);
    }
});


module.exports = router;    