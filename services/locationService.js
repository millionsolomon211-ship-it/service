const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const getLocations = async (offset, limit, regionName = null) => {
    const db = getDB();
    const collection = db.collection("locations");

    let query = {};
    if (regionName && regionName.trim() !== "") {
        query = { region: { $regex: new RegExp(`^${regionName.trim()}$`, "i") } };
    }

    const total = await collection.countDocuments(query);
    const items = await collection.find(query)
        .skip(offset)
        .limit(limit)
        .toArray();

    return { items, total };
};

const createLocation = async (data) => {
    const db = getDB();
    return await db.collection("locations").insertOne({ ...data, createdAt: new Date() });
};

const updateLocation = async (id, data) => {
    const db = getDB();
    return await db.collection("locations").updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...data, updatedAt: new Date() } }
    );
};

const deleteLocation = async (id) => {
    const db = getDB();
    return await db.collection("locations").deleteOne({ _id: new ObjectId(id) });
};

module.exports = { getLocations, createLocation, updateLocation, deleteLocation };
