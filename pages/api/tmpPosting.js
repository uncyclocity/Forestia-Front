import connectDB from '../../middleware/mongodb';
import mongoose from 'mongoose';
import Free from '../../models/Free';
import Photo from '../../models/Photo';

const handler = async (req, res) => {
  const post1 = new Free({
    _id: new mongoose.Types.ObjectId(),
    id: 0,
    author: '백괴',
    date: '2021-08-02 22:39:08',
    title: '테스트0',
    content: '자게/테스트0 입니다.',
    comments: [
      {
        id: 0,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '자게/테스트0/댓글1 입니다.',
      },
      {
        id: 1,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '자게/테스트0/댓글2 입니다.',
      },
      {
        id: 2,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '자게/테스트0/댓글3 입니다.',
      },
    ],
  });
  const post2 = new Free({
    _id: new mongoose.Types.ObjectId(),
    id: 1,
    author: '백괴',
    date: '2021-08-02 22:39:08',
    title: '테스트1',
    content: '자게/테스트1 입니다.',
    comments: [
      {
        id: 0,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '자게/테스트1/댓글1 입니다.',
      },
      {
        id: 1,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '자게/테스트1/댓글2 입니다.',
      },
      {
        id: 2,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '자게/테스트1/댓글3 입니다.',
      },
    ],
  });
  const post3 = new Free({
    _id: new mongoose.Types.ObjectId(),
    id: 2,
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

  await post1
    .save()
    .then(() => {
      console.log('성공');
    })
    .catch((err) => {
      console.error(err);
    });

  await post2
    .save()
    .then(() => {
      console.log('성공');
    })
    .catch((err) => {
      console.error(err);
    });

  await post3
    .save()
    .then(() => {
      console.log('성공');
    })
    .catch((err) => {
      console.error(err);
    });

  const post4 = new Photo({
    _id: new mongoose.Types.ObjectId(),
    id: 0,
    author: '백괴',
    date: '2021-08-02 22:39:08',
    title: '테스트0',
    content: '짤게/테스트0 입니다.',
    comments: [
      {
        id: 0,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트0/댓글1 입니다.',
      },
      {
        id: 1,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트0/댓글2 입니다.',
      },
      {
        id: 2,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트0/댓글3 입니다.',
      },
    ],
  });
  const post5 = new Photo({
    _id: new mongoose.Types.ObjectId(),
    id: 1,
    author: '백괴',
    date: '2021-08-02 22:39:08',
    title: '테스트1',
    content: '짤게/테스트1 입니다.',
    comments: [
      {
        id: 0,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트1/댓글1 입니다.',
      },
      {
        id: 1,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트1/댓글2 입니다.',
      },
      {
        id: 2,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트1/댓글3 입니다.',
      },
    ],
  });
  const post6 = new Photo({
    _id: new mongoose.Types.ObjectId(),
    id: 2,
    author: '백괴',
    date: '2021-08-02 22:39:08',
    title: '테스트2',
    content: '짤게/테스트2 입니다.',
    comments: [
      {
        id: 0,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트2/댓글1 입니다.',
      },
      {
        id: 1,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트2/댓글2 입니다.',
      },
      {
        id: 2,
        author: '백괴',
        date: '2021-08-02 22:39:08',
        content: '짤게/테스트2/댓글3 입니다.',
      },
    ],
  });

  await post4
    .save()
    .then(() => {
      console.log('성공');
    })
    .catch((err) => {
      console.error(err);
    });

  await post5
    .save()
    .then(() => {
      console.log('성공');
    })
    .catch((err) => {
      console.error(err);
    });

  await post6
    .save()
    .then(() => {
      console.log('성공');
    })
    .catch((err) => {
      console.error(err);
    });
};

export default connectDB(handler);
