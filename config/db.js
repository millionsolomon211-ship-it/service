const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI || "mongodb://14153milla_db_user:2EBAlOoryLSgecVq@ac-nvgbqv9-shard-00-00.lkrmu1d.mongodb.net:27017/service?ssl=true&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri, { family: 4 });

let db;

async function connectDB() {
    if (db) return db;
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        db = client.db();
        return db;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}

function getDB() {
    if (!db) {
        throw new Error("Database not initialized. Ensure connectDB is awaited.");
    }
    return db;
}

module.exports = { connectDB, getDB };
