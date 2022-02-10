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

  try {
    await doComment.delete({ boardType, postId, commentId, authorId });
  } catch (e) {
    console.error(e);
  }

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
