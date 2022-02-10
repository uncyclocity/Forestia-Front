import { doReply } from '../../doApi';

export const deleteReply = async ({
  boardType,
  postId,
  commentId,
  dispatch,
  authorId,
  replyId,
}) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });

  try {
    await doReply.delete({
      boardType,
      postId,
      commentId,
      authorId,
      replyId,
    });
  } catch (e) {
    console.error(e);
  }

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
