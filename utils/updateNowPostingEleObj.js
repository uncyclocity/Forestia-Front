import { doPosting } from "./doApi";

export const UpdateNowPostingEleObj = async (
  nowPostingEleObj,
  setNowPostingEleObj,
  dispatch,
) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
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
  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};