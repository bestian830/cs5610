const express = require('express');
const app =express();

const tasksRouter = require('./routes/tasks.js');
app.set('view engine', 'pug');
app.set('views', './views');

app.use(tasksRouter);

app.use(express.static('public'));

const port = 3000;

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});

// const fs = require('fs');

// fs.writeFile('test.txt', 'This is a message for you!', (err) => {
//     if(err) {
//         console.log('write failed');
//     } else {
//         console.log('write successful');
//         fs.readFile('test.txt', 'utf-8', (err, data) => {
//             if(err) throw err;
//             console.log(data);
//         })
//     }
// })



// const logger = require('./logger');
// console.log(logger.version);
