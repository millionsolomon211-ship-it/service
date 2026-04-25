const favoriteService = require("../services/favoriteService");

const addToFavorites = async (req, res) => {
    try {
        await favoriteService.addToFavorites(req.body);
        res.status(200).json({ message: "Added to favorites" });
    } catch (error) {
        res.status(500).json({ error: "Failed to add to favorites" });
    }
};

const getMyFavorites = async (req, res) => {
    try {
        const { userEmail } = req.query;
        if (!userEmail) return res.status(400).json({ error: "userEmail is required" });
        const favorites = await favoriteService.getFavoritesByUser(userEmail);
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch favorites" });
    }
};

const removeFromFavorites = async (req, res) => {
    try {
        const { userEmail, locationId } = req.body;
        await favoriteService.removeFromFavorites(userEmail, locationId);
        res.status(200).json({ message: "Removed from favorites" });
    } catch (error) {
        res.status(500).json({ error: "Failed to remove from favorites" });
    }
};

module.exports = { addToFavorites, getMyFavorites, removeFromFavorites };
