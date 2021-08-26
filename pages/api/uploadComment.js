import connectDB from '../../middleware/mongodb';
import Free from '../../models/Free';
import Photo from '../../models/Photo';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { boardType, postid, id, author, date, content, comments } = req.body;
    if (id >= 0 && author && date && content) {
      try {
        var newComments = [
          ...comments,
          {
            id,
            author,
            date,
            content,
          },
        ];
        console.log(newComments);
        if (boardType === 'free') {
          var post = Free.updateOne({ id: postid }, { newComments });
        } else if (boardType === 'photo') {
          var post = Photo.updateOne({ id: postid }, { newComments });
        }
        return res.status(200).send(post);
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
