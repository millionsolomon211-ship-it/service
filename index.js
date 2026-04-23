const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { connectDB } = require("./config/db");
const regionRoutes = require("./routes/regionRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/regions", regionRoutes);
app.use("/api/locations", locationRoutes);

app.get("/", (req, res) => {
    res.send("Service API is running!");
});

// Start Server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
