import { doComment, doPosting } from '../../doApi';

export const putComment = async ({
  dispatch,
  editCommObj,
  setEditCommObj,
  nowPostingEleObj,
  setNowPostingEleObj,
  postCnt,
  authorId,
}) => {
  if (!postCnt) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    const token = localStorage.getItem('token');

    try {
      await doComment.put({
        nowPostingEleObj,
        editCommObj,
        setEditCommObj,
        authorId,
        token,
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
