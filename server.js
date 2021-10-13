const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const imageCrRouter = require('./pages/api/post_posting/postCreateImage');
const imageDelRouter = require('./pages/api/post_posting/postDeleteImage');

app.use(cors());

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());

    server.use('/api/post_posting/postCreateImage', imageCrRouter);

    server.use('/api/post_posting/postDeleteImage', imageDelRouter);

    server.use('/uploads', express.static('public/uploads'));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.post('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(9229, (err) => {
      if (err) throw err;
      console.log('9229번 포트에서 대기 중');
    });
  })
  .catch((ex) => {
    console.error();
  });
