import { doComment, doPosting } from '../../doApi';

export const putComment = async ({
  dispatch,
  editCommObj,
  setEditCommObj,
  nowPostingEleObj,
  setNowPostingEleObj,
  postCnt,
}) => {
  if (!postCnt) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    try {
      await doComment.put(nowPostingEleObj, editCommObj, setEditCommObj);

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
