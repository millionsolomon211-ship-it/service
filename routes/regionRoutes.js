const express = require("express");
const router = express.Router();
const regionController = require("../controllers/regionController");
const { adminAuth } = require("../middlewares/adminAuth");

router.get("/", regionController.getRegions);
router.post("/", adminAuth, regionController.createRegion);
router.put("/:id", adminAuth, regionController.updateRegion);
router.delete("/:id", adminAuth, regionController.deleteRegion);

module.exports = router;
