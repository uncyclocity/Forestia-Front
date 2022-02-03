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

  const token = localStorage.getItem('token');

  try {
    await doReply.delete({
      boardType,
      postId,
      commentId,
      authorId,
      token,
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
