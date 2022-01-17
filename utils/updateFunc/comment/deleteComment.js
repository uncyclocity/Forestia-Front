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
  await doComment.delete(boardType, postId, commentId);
  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
