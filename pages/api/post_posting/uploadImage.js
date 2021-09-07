const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads/${req.query.board_type}`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single('images');

router.post('/', upload, (req, res) => {
  console.log(req.file);
  return res.json({
    url: `/uploads/${req.query.board_type}/${req.file.filename}`,
  });
});

module.exports = router;
