const { getDB } = require("../config/db");

const getLocations = async (offset, limit) => {
    const db = getDB();
    const collection = db.collection("locations");

    const total = await collection.countDocuments();
    const items = await collection.find({})
        .skip(offset)
        .limit(limit)
        .toArray();

    return { items, total };
};

module.exports = { getLocations };
