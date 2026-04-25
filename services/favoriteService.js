const { getDB } = require("../config/db");

const addToFavorites = async (favoriteData) => {
    const db = getDB();
    const collection = db.collection("favorites");
    
    // Use updateOne with upsert to prevent duplicates
    const result = await collection.updateOne(
        { userEmail: favoriteData.userEmail, locationId: favoriteData.locationId },
        { $set: { ...favoriteData, updatedAt: new Date() } },
        { upsert: true }
    );
    
    return result;
};

const getFavoritesByUser = async (userEmail) => {
    const db = getDB();
    const collection = db.collection("favorites");
    return await collection.find({ userEmail }).toArray();
};

const removeFromFavorites = async (userEmail, locationId) => {
    const db = getDB();
    const collection = db.collection("favorites");
    return await collection.deleteOne({ userEmail, locationId });
};

module.exports = { addToFavorites, getFavoritesByUser, removeFromFavorites };
