const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");

const createBooking = async (bookingData) => {
    const db = getDB();
    const collection = db.collection("bookings");
    
    const result = await collection.insertOne({
        ...bookingData,
        createdAt: new Date()
    });
    
    return result;
};

const getBookingsByUser = async (userEmail) => {
    const db = getDB();
    const collection = db.collection("bookings");
    return await collection.find({ userEmail }).sort({ createdAt: -1 }).toArray();
};

module.exports = { createBooking, getBookingsByUser };
