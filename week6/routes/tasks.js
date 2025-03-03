// responseible for all routing related to tasks
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { addToDB } = require('../db');
// or const db = require('../db');

router.post("/", async (req,res)=> {
    try {
        console.log("req.body", req.body);
        await addToDB(req.body);
        res.redirect("/tasks");
        // or await db.addToDB(req.body);
        // res.send("data received");
    }
    catch (err) {
        res.status(500).send(err.message);
    }  
});

router.get("/", async (req,res)=> {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        // console.log(response.data);
        res.json(response.data);
    } catch (err) {
        res.status(500).send(err.message);
    }
    
})


// this is the handler for /tasks
// router.get("/", (req,res)=> {
//     // send a get request to jsonplaceholder api
//     const promise = axios.get("https://jsonplaceholder.typicode.com/todo/");
//     console.log(promise);
//     promise.then((response) => {
//         res.json(response.data);
//     }).catch((error) => {
//         res.status(500).send(error.message);
//     });
// })

// show the form to add a  new task
router.get("/newtask", function (req, res) {
    res.render("taskForm");
});


router.get("/:taskId", async (req,res)=> {
    console.log(req.params.taskId);
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
        // res.json(response.data);
        // console.log(promise);
        // console.log(req.params.taskId);
        // res.send(`<p>You are viewing task ${req.params.taskId}</p>`);
        res.render("task", {
            id : req.params.taskId,
            title : response.data.title,
            completed : response.data.completed,
            userName : response.data.userId});
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;    