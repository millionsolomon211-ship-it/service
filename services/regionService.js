const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const getRegions = async (offset, limit) => {
    const db = getDB();
    const collection = db.collection("Regions");

    const total = await collection.countDocuments();
    const items = await collection.find({})
        .skip(offset)
        .limit(limit)
        .toArray();

    return { items, total };
};

const createRegion = async (data) => {
    const db = getDB();
    return await db.collection("Regions").insertOne({ ...data, createdAt: new Date() });
};

const updateRegion = async (id, data) => {
    const db = getDB();
    return await db.collection("Regions").updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...data, updatedAt: new Date() } }
    );
};

const deleteRegion = async (id) => {
    const db = getDB();
    return await db.collection("Regions").deleteOne({ _id: new ObjectId(id) });
};

module.exports = { getRegions, createRegion, updateRegion, deleteRegion };
