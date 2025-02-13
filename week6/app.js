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


const logger = require("./logger.js");
// logger.log(logger);
logger.log();