import { doComment } from '../../doApi';
import { UpdateNowPostingEleObj } from '../../updateNowPostingEleObj';

export const postComment = async ({
  dispatch,
  postCnt,
  comment,
  setComment,
  nowPostingEleObj,
  setNowPostingEleObj,
  userObj,
}) => {
  if (!postCnt) {
    if (comment) {
      dispatch({
        type: 'postcnt_switcher',
        sw: true,
      });
      await doComment.post(nowPostingEleObj, comment, userObj);
      await UpdateNowPostingEleObj(
        nowPostingEleObj,
        setNowPostingEleObj,
        dispatch,
      );
      setComment('');
      dispatch({
        type: 'postcnt_switcher',
        sw: false,
      });
    } else {
      alert('댓글을 입력하세요');
    }
  }
};
