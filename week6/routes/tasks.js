// responseible for all routing related to tasks
const express = require('express');
const router = express.Router();

router.get("/", (req,res)=> {
    // res is responsible for sending the response
    res.send("Hello and welcome to my site!");
})

router.get("/:taskId", (req,res)=> {
    console.log(req.params.taskId);
    res.send(`<p>You are viewing task ${req.params.taskId}</p>`);
})

module.exports = router;