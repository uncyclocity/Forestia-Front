import postCntSwitcher from '../../../common/postCntSwitcher';
import { getPosting, postPosting } from '../../../doApi/doApi';

export default async function getDoUpdateUDdata(
  udType,
  revUdType,
  nowPostingEleObj,
  userName,
  dispatch,
  setNowPostingEleObj,
) {
  const defaultData = {
    board_type: nowPostingEleObj.board_type,
    post_id: nowPostingEleObj.id,
    ud_type: udType,
    userName,
  };

  const udClickerArr = nowPostingEleObj[udType].clicker;
  const revUdClickerArr = nowPostingEleObj[revUdType].clicker;

  postCntSwitcher(dispatch, true);

  if (udClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      ...defaultData,
      operation: 'sub',
    };
    await postPosting.doPostEditUpDown(data);
  } else if (revUdClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      ...defaultData,
      rev_ud_type: revUdType,
      operation: 'addsub',
    };
    await postPosting.doPostEditUpDown(data);
  } else {
    const data = {
      ...defaultData,
      operation: 'add',
    };
    await postPosting.doPostEditUpDown(data);
  }

  const getPostingEle = await getPosting.doGetNowPostingEleObj(
    nowPostingEleObj.board_type,
    nowPostingEleObj.id,
  );

  const nowPostingEleObjUpdated = {
    ...getPostingEle,
    board_type: nowPostingEleObj.board_type,
  };

  setNowPostingEleObj(nowPostingEleObjUpdated);

  postCntSwitcher(dispatch, false);
}
