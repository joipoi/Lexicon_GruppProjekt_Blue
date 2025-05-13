const express = require('express');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Set up Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST endpoint to upload images to Cloudinary
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: 'Failed to upload image' });
        }
        return res.json({ imageUrl: result.secure_url });
      }
    );

    req.file.stream.pipe(result);
  } catch (error) {
    res.status(500).json({ error: 'Error uploading to Cloudinary' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
