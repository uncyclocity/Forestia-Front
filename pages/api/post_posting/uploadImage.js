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

const upload = multer({ storage }).array('images');

router.post('/', upload, (req, res) => {
  const pathArr = [];
  for (var i = 0; i < req.files.length; i++) {
    pathArr.push(req.files[i].path);
  }
  res.json(pathArr);
});

module.exports = router;
