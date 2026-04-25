const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");
const { adminAuth } = require("../middlewares/adminAuth");

router.get("/", locationController.getLocations);
router.post("/", adminAuth, locationController.createLocation);
router.put("/:id", adminAuth, locationController.updateLocation);
router.delete("/:id", adminAuth, locationController.deleteLocation);

module.exports = router;
