import { doComment } from '../../doApi';

export const deleteComment = async ({
  boardType,
  postId,
  commentId,
  dispatch,
  authorId,
}) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });

  const token = localStorage.getItem('token');

  try {
    await doComment.delete({ boardType, postId, commentId, authorId, token });
  } catch (e) {
    console.error(e);
  }

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
