const {MongoClient} = require('mongodb'); 
require("dotenv").config();
// Same with const MongoClient = require('mongodb').MongoClient;
const url = process.env.MongoDB_URL;
const client = new MongoClient(url);

module.exports = {
    connect: async function() {
        await client.connect();
    },
    //addToDB accepts an object to write to tasks collection in cs5610 db
    addToDB: async function(doc) {
       try {
        const result = await client.db("cs5610").collection("tasks").insertOne(doc);
       } catch (err){
            console.error("Failed to write to database");
       }
    }, 
};