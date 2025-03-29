const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ryan:2JZyRzYYJP1uwGNE@cluster0.avt1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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

async function insertTask(task) {
    try {
        const database = client.db('cs5610'); // 选择数据库
        const tasks = database.collection('tasks'); // 选择集合
        const result = await tasks.insertOne(task); // 插入数据
        console.log(`Inserted task with the id ${result.insertedId}`);
        return result;
    }
    catch (err) {
        console.error("Insert failed:", err);
        throw err;
    }
}

module.exports = { connect, insertTask };