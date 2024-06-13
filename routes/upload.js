import express from 'express';
import multer from 'multer';
import uploadFile from './../utils/upload-file';

const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const result = await uploadFile(req.file, process.env.DO_SPACES_BUCKET);
    res.status(200).json({ url: result.Location });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
