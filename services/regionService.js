const { getDB } = require("../config/db");

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

module.exports = { getRegions };
