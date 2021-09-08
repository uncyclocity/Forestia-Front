const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const imageRouter = require('./pages/api/post_posting/uploadImage');
const imageDelRouter = require('./pages/api/post_posting/deleteImage');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/api/post_posting/uploadImage', imageRouter);

    server.use('/api/post_posting/deleteImage', imageDelRouter);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.post('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('3000번 포트에서 대기 중');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
  });
