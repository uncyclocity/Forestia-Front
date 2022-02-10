import { doPosting, doReply } from '../../doApi';

export const putReply = async ({
  dispatch,
  editReplyObj,
  setEditReplyObj,
  nowPostingEleObj,
  setNowPostingEleObj,
  postCnt,
  commentId,
  authorId,
  replyId,
}) => {
  if (!postCnt) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    try {
      await doReply.put({
        nowPostingEleObj,
        editReplyObj,
        setEditReplyObj,
        authorId,
        replyId,
        commentId,
      });

      const getPostingEle = await doPosting.get.ele(
        nowPostingEleObj.boardType,
        nowPostingEleObj.id,
      );

      const nowPostingEleObjUpdated = {
        ...getPostingEle,
        boardType: nowPostingEleObj.boardType,
      };

      setNowPostingEleObj(nowPostingEleObjUpdated);
    } catch (e) {
      console.error(e);
    }

    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  }
};
