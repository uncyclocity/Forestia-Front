import connectDB from '../../../middleware/mongodb';
import Free from '../../../models/Free';
import Photo from '../../../models/Photo';

const addition = (post, user, ud_type) => {
  post[ud_type].amount = parseInt(post[ud_type].amount) + 1;
  post[ud_type].clicker.push(user);
};

const substract = (post, user, ud_type) => {
  post[ud_type].amount = parseInt(post[ud_type].amount) - 1;
  post[ud_type].clicker = post[ud_type].clicker.filter(
    (clickUser) => clickUser !== user,
  );
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { board_type, post_id, ud_type, operation, user, rev_ud_type } =
      req.body;
    if (board_type && parseInt(post_id) >= 0 && ud_type && operation && user) {
      try {
        if (board_type === 'free') {
          var post = await Free.findOne({ id: post_id });
        } else if (board_type === 'photo') {
          var post = await Photo.findOne({ id: post_id });
        }
        if (operation === 'add') {
          addition(post, user, ud_type);
        } else if (operation === 'sub') {
          substract(post, user, ud_type);
        } else if (operation === 'addsub') {
          substract(post, user, rev_ud_type);
          addition(post, user, ud_type);
        }
        var postupdated = await post.save();
        return res.status(200).send(postupdated);
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
