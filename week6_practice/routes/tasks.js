const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello World!')
});

router.get('/tasks', function(req, res) {
    res.send(`<h1 style='color: blue;'>List of all the tasks</h1>`)
});

router.get('/tasks/:taskId', function(req, res) {
    const {taskId} = req.params;
    // console.log(req.params.taskId);
    // res.send(`<p>You are viewing task ${req.params.taskId}</p>`)
    res.render('task', {id: taskId});
});

router.get('/tasks/:taskId/:taskName', function(req, res) {
    const {taskId, taskName} = req.params;
    console.log(taskId, taskName);
    // console.log(req.query);
    res.send(`<p>You are viewing task ${taskId}: ${taskName}</p>`)
});

const users = [
    {name: 'Neda', course: 'CS5610'},
    {name: 'Ildar', course: 'CS5200'},
]

router.get('/users', function(req, res) {
    const {name, course} = req.query;
    const filteredUsers = users.filter(u => {
        const matchName = name ? u.name === name : true;
        const matchCourse = course ? u.course === course :true;
        return matchName && matchCourse;
    })
    if (filteredUsers.length > 0) {
        res.status(404).send('No matching users found');
    } else {
        res.send(filteredUsers);
    }
});

module.exports = router;