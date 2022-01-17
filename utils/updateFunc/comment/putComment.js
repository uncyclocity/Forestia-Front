import { doComment } from '../../doApi';
import { UpdateNowPostingEleObj } from '../../updateNowPostingEleObj';

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
    await doComment.put(nowPostingEleObj, editCommObj, setEditCommObj);
    await UpdateNowPostingEleObj(
      nowPostingEleObj,
      setNowPostingEleObj,
      dispatch,
    );
    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  }
};
