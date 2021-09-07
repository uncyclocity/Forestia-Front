import express from 'express';
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads/${req.query.board_type}/${req.query.id}`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single('images');

router.post('/', (req, res) => {
  if (req.method === 'POST') {
    const { board_type, id } = req.query;
    if (board_type && id >= 0) {
      try {
        upload(req, res, () => {
          return res.json({
            sucess: true,
            image: res.req.file.path,
            fileName: res.req.file.filename,
          });
        });
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
});

export default router;
