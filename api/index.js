const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("../config/db");
const regionRoutes = require("../routes/regionRoutes");
const locationRoutes = require("../routes/locationRoutes");
const uploadRoutes = require("../routes/uploadRoutes");
const bookingRoutes = require("../routes/bookingRoutes");
const favoriteRoutes = require("../routes/favoriteRoutes");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
}));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Database connection middleware for Serverless
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ error: "Database connection failed" });
    }
});

const path = require("path");

app.use('/img', express.static(path.join(__dirname, '../img')));
// Routes
app.use("/api/regions", regionRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/favorites", favoriteRoutes);

app.get("/", (req, res) => {
    res.send("Service API is running!");
});

// Start Server
if (process.env.NODE_ENV !== "production") {
    connectDB().then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    });
} else {
    // For Vercel Serverless Function
    connectDB();
}

module.exports = app;
