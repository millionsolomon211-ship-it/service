const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.post("/add", favoriteController.addToFavorites);
router.post("/remove", favoriteController.removeFromFavorites);
router.get("/", favoriteController.getMyFavorites);

module.exports = router;
