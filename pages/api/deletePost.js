import connectDB from '../../middleware/mongodb';
import Free from '../../models/Free';
import Photo from '../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { boardType, id } = req.body;
    if (boardType && id >= 0) {
      try {
        if (boardType === 'free') {
          var post = await Free.deleteOne({ id });
          console.log(post);
        } else if (boardType === 'photo') {
          var post = await Photo.deleteOne({ id });
        }
        return res.status(200);
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
