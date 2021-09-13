import connectDB from '../../../middleware/mongodb';
import Photo from '../../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const photo = await Photo.find();
      return res.status(200).send(photo.length);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
