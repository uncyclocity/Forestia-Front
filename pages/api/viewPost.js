import connectDB from '../../middleware/mongodb';
import Post from '../../models/post';

const handler = async (req, res) => {
  console.log(req);
  if (req.method === 'GET') {
    try {
      return await Post.find().then((postsArr) => {
        return res.status(200).send(postsArr);
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
