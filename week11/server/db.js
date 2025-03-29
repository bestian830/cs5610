const { MongoClient, ObjectId } = require('mongodb');
require("dotenv").config();

const uri = process.env.MongoDB_URL;
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client;
    } catch (err) {
        console.error("Connection failed:", err);
        throw err;
    }
}

// 插入新任务
async function insertTask(task) {
    try {
        const database = client.db('cs5610');
        const tasks = database.collection('tasks');
        const result = await tasks.insertOne(task);
        console.log(`Inserted task with id ${result.insertedId}`);
        return result;
    } catch (err) {
        console.error("Insert failed:", err);
        throw err;
    }
}

// 查询所有任务
async function getTasks() {
    try {
        const database = client.db('cs5610');
        const tasks = database.collection('tasks');
        const result = await tasks.find({}).toArray(); // 获取全部数据
        return result;
    } catch (err) {
        console.error("Failed to fetch tasks:", err);
        throw err;
    }
}

// 根据ID查询单个任务
async function getTaskById(id) {
    try {
        const database = client.db('cs5610');
        const tasks = database.collection('tasks');
        const result = await tasks.findOne({ _id: new ObjectId(id) });
        return result;
    } catch (err) {
        console.error("Failed to fetch task by ID:", err);
        throw err;
    }
}

module.exports = {
    connect,
    insertTask,
    getTasks,
    getTaskById
};
