import { doPosting, doReply } from '../../doApi';

export const postReply = async ({
  dispatch,
  postCnt,
  comment,
  replyObj,
  setReplyObj,
  nowPostingEleObj,
  setNowPostingEleObj,
}) => {
  if (!postCnt) {
    if (replyObj.content) {
      dispatch({
        type: 'postcnt_switcher',
        sw: true,
      });

      try {
        await doReply.post({
          nowPostingEleObj,
          replyObj,
          replyArr: comment.replys,
        });

        const nowPostingEleObjUpdated = await doPosting.get.ele(
          nowPostingEleObj.boardType,
          nowPostingEleObj.id,
        );

        nowPostingEleObjUpdated.boardType = nowPostingEleObj.boardType;

        setNowPostingEleObj(nowPostingEleObjUpdated);

        setReplyObj(false);
      } catch (e) {
        console.error(e);
      }

      dispatch({
        type: 'postcnt_switcher',
        sw: false,
      });
    } else {
      alert('대댓글을 입력하세요');
    }
  }
};
