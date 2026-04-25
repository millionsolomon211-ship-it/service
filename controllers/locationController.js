const locationService = require("../services/locationService");

const getLocations = async (req, res) => {
    try {
        const offset = parseInt(req.query.offset) || 0;
        const lim = parseInt(req.query.lim) || 10;
        const regionName = req.query.region;

        const { items, total } = await locationService.getLocations(offset, lim, regionName);

        if (offset >= total && total > 0 && items.length === 0) {
            return res.json({ message: "nomore content", data: [] });
        }

        res.json({
            data: items,
            total,
            hasMore: offset + items.length < total
        });
    } catch (error) {
        console.error("Error in getLocations controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createLocation = async (req, res) => {
    try {
        const result = await locationService.createLocation(req.body);
        res.status(201).json({ message: "Location created successfully", id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: "Failed to create location" });
    }
};

const updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        await locationService.updateLocation(id, req.body);
        res.json({ message: "Location updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update location" });
    }
};

const deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;
        await locationService.deleteLocation(id);
        res.json({ message: "Location deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete location" });
    }
};

module.exports = { getLocations, createLocation, updateLocation, deleteLocation };
