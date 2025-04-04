const {MongoClient, ObjectId} = require('mongodb'); 
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
    getAllTasks: async function() {
        try {
            const result = await client.db("cs5610").collection("tasks").find({}).toArray();
            return result;
        } catch (err) {
            console.error("Failed to read from database", err);
            throw err;
        }
    },
    getTaskById: async function(id) {
        try {
            const objId = new ObjectId(id);
            return await client.db("cs5610").collection("tasks").findOne({_id: objId});
        } catch (err) {
            console.error("Failed to get task by ID", err);
            throw err;
        }
    }
};