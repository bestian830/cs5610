const {MongoClient} = require('mongodb'); 
// Same with const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MongoDB_URL;


module.exports = {
    connect: async function() {
        const client = new MongoClient(uri);
        await client.connect();
    },
};