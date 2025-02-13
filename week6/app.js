// use writefile to write a text to a file
const fs = require('fs');

fs.writeFile("data.txt", "This is a message for you!", (err) => {if(err) {
    console.log("write failed");
} else {
    console.log("write successful");
}
});