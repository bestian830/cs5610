// responseible for all routing related to tasks
const express = require('express');
const router = express.Router();
const axios = require('axios');


// this is the handler for /tasks
router.get("/", (req,res)=> {
    // send a get request to jsonplaceholder api
    const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
    console.log(promise);
    promise.then((response) => {
        res.json(response.data);
    }).catch((error) => {
        res.status(500).send(error.message);
    });
})

router.get("/:taskId", (req,res)=> {
    console.log(req.params.taskId);
    // res.send(`<p>You are viewing task ${req.params.taskId}</p>`);
    res.render("task", {id : req.params.taskId});
})



module.exports = router;