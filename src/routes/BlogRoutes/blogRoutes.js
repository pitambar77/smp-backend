import express from "express";
import upload from "../../middleware/blogUpload.js";
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from "../../controllers/BlogController/blogController.js";

const router = express.Router();

// Blog CRUD
router.post("/", upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

// Jodit inline image upload
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: "No file uploaded" });
  }

  res.json({
    success: true,
    url: `/uploads/${req.file.filename}`, // frontend can use this URL
  });
});

export default router;
