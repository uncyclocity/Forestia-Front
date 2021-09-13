import connectDB from '../../../middleware/mongodb';
import Free from '../../../models/Free';
import Photo from '../../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { page, board_type } = req.query;
    if ((page, board_type)) {
      try {
        switch (board_type) {
          case 'free':
            var postings = await Free.find()
              .sort({ _id: -1 })
              .skip((page - 1) * 15)
              .limit(15);
            break;
          case 'photo':
            var postings = await Photo.find()
              .sort({ _id: -1 })
              .skip((page - 1) * 15)
              .limit(15);
            break;
        }
        return res.status(200).send(postings);
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