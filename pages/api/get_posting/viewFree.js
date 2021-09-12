import connectDB from '../../../middleware/mongodb';
import Free from '../../../models/Free';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      return await Free.find()
        .sort({ _id: -1 })
        .then((data) => {
          return res.status(200).send(data);
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
