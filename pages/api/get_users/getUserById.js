import connectDB from '../../../middleware/mongodb';
import Member from '../../../models/Member';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query;
    if (id) {
      try {
        var user = await Member.findOne({ id });
        return res.status(200).send(user);
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
