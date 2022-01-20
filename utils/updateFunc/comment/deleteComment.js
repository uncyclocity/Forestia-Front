import { doComment } from '../../doApi';

export const deleteComment = async ({
  boardType,
  postId,
  commentId,
  dispatch,
}) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });

  try {
    await doComment.delete(boardType, postId, commentId);
  } catch (e) {
    console.error(e);
  }

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
