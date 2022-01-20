import { doComment, doPosting } from '../../doApi';

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

      try {
        await doComment.post(nowPostingEleObj, comment, userObj);

        const nowPostingEleObjUpdated = await doPosting.get.ele(
          nowPostingEleObj.boardType,
          nowPostingEleObj.id,
        );

        nowPostingEleObjUpdated.boardType = nowPostingEleObj.boardType;

        setNowPostingEleObj(nowPostingEleObjUpdated);

        setComment('');
      } catch (e) {
        console.error(e);
      }

      dispatch({
        type: 'postcnt_switcher',
        sw: false,
      });
    } else {
      alert('댓글을 입력하세요');
    }
  }
};
