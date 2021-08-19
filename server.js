const express = require('express');
const next = require('next');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const app_e = express();
const handle = app.getRequestHandler();
const Post = require('./models/post');
const { CONNECT_URI } = process.env;
const mongoose = require('mongoose');

mongoose
  .connect(CONNECT_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((client) => {
    console.log('MongoDB Connected...');
  })
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

app_e.use((req, res, next) => {
  return Post.find()
    .then((postsArray) => {
      console.log(postsArray);
      next();
    })
    .catch((err) => console.log(err));
});

const post1 = new Post({
  id: 1,
  author: '백괴',
  date: '2021-08-02 22:39:08',
  title: '테스트2',
  content: '자게/테스트2 입니다.',
  comments: [
    {
      id: 0,
      author: '백괴',
      date: '2021-08-02 22:39:08',
      content: '자게/테스트2/댓글1 입니다.',
    },
    {
      id: 1,
      author: '백괴',
      date: '2021-08-02 22:39:08',
      content: '자게/테스트2/댓글2 입니다.',
    },
    {
      id: 2,
      author: '백괴',
      date: '2021-08-02 22:39:08',
      content: '자게/테스트2/댓글3 입니다.',
    },
  ],
});

post1
  .save()
  .then(() => {
    console.log('성공');
  })
  .catch((err) => {
    console.error(err);
  });
