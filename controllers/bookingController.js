const bookingService = require("../services/bookingService");

const createBooking = async (req, res) => {
    try {
        const result = await bookingService.createBooking(req.body);
        res.status(201).json({ message: "Booking created successfully", id: result.insertedId });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ error: "Failed to create booking" });
    }
};

const getMyBookings = async (req, res) => {
    try {
        const { userEmail } = req.query;
        if (!userEmail) return res.status(400).json({ error: "userEmail is required" });
        const bookings = await bookingService.getBookingsByUser(userEmail);
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};

module.exports = { createBooking, getMyBookings };
