const express = require("express");
const router = express.Router();
const { adminAuth } = require("../middlewares/adminAuth");
const { upload } = require("../middlewares/uploadConfig");

// POST /api/upload/img — admin-only image upload
router.post("/img", adminAuth, upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
    }

    res.json({
        message: "Image uploaded successfully",
        filename: req.file.filename,
        path: `/img/region/${req.file.filename}`
    });
});

module.exports = router;
