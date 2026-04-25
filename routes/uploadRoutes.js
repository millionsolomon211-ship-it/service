const express = require("express");
const multer = require("multer");
const path = require("path");
const { adminAuth } = require("../middlewares/adminAuth");

const router = express.Router();

// Specific storage for locations
const locationStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "img", "locations"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext).replace(/\s+/g, '_');
    cb(null, `location_${name}_${Date.now()}${ext}`);
  },
});

const uploadLocation = multer({ 
    storage: locationStorage,
    limits: { fileSize: 5 * 1024 * 1024 }
});

// POST /api/upload/location — admin-only image upload for locations
router.post("/location", adminAuth, uploadLocation.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image file provided" });
  }

  res.json({
    message: "Location image uploaded successfully",
    filename: req.file.filename
  });
});

module.exports = router;
