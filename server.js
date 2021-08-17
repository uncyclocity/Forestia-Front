const express = require('express');
const next = require('next');

require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { CONNECT_URI } = process.env;

const mongoose = require('mongoose');
mongoose
  .connect(CONNECT_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/board/free/:id', async (req, res) => {
      app.render(req, res, '/board/post', {
        board: 'free',
        post_id: req.params.id,
      });
    });

    server.get('/board/comuin/:id', async (req, res) => {
      app.render(req, res, '/board/post', {
        board: 'comuin',
        post_id: req.params.id,
      });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on Server Port: 3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
