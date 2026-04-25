const regionService = require("../services/regionService");

const getRegions = async (req, res) => {
    try {
        const offset = parseInt(req.query.offset) || 0;
        const lim = parseInt(req.query.lim) || 10;

        const { items, total } = await regionService.getRegions(offset, lim);

        if (offset >= total && total > 0) {
            return res.json({ message: "nomore content", data: [] });
        }

        res.json({
            data: items,
            total,
            hasMore: offset + items.length < total
        });
    } catch (error) {
        console.error("Error in getRegions controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createRegion = async (req, res) => {
    try {
        const result = await regionService.createRegion(req.body);
        res.status(201).json({ message: "Region created successfully", id: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: "Failed to create region" });
    }
};

const updateRegion = async (req, res) => {
    try {
        const { id } = req.params;
        await regionService.updateRegion(id, req.body);
        res.json({ message: "Region updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update region" });
    }
};

const deleteRegion = async (req, res) => {
    try {
        const { id } = req.params;
        await regionService.deleteRegion(id);
        res.json({ message: "Region deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete region" });
    }
};

module.exports = { getRegions, createRegion, updateRegion, deleteRegion };
