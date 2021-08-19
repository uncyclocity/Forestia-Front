import connectDB from '../../middleware/mongodb';
import Post from '../../models/post';

const handler = async (req, res) => {
  console.log(req);
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { id, author, date, title, content, comments } = req.body;
    if (id && author && date && title && content && comments) {
      try {
        // Hash password to store it in DB
        var post = new Post({
          id,
          author,
          date,
          title,
          content,
          comments,
        });
        // Create new user
        var postcreated = await post.save();
        return res.status(200).send(postcreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send('data_incomplete');
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
