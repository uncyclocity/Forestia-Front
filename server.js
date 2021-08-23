const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

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
