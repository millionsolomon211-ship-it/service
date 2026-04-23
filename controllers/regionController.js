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

module.exports = { getRegions };
