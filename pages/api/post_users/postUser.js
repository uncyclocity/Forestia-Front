import connectDB from '../../../middleware/mongodb';
import Member from '../../../models/Member';
import mongoose from 'mongoose';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { id, email, nickName } = req.body;
    if (id && email && nickName) {
      try {
        var user_obj = {
          _id: new mongoose.Types.ObjectId(),
          id,
          email,
          nickname: nickName,
        };
        var user = new Member(user_obj);
        var usercreated = await user.save();
        return res.status(200).send(usercreated);
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
