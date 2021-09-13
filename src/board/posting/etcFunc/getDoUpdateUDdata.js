import instance from '../../../common/instance';
import { posting } from '../../../doApi/doApi';

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

  if (udClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      ...defaultData,
      operation: 'sub',
    };
    await posting.doUpdateUpDown(data, dispatch);
  } else if (revUdClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      ...defaultData,
      rev_ud_type: revUdType,
      operation: 'addsub',
    };
    await posting.doUpdateUpDown(data, dispatch);
  } else {
    const data = {
      ...defaultData,
      operation: 'add',
    };
    await posting.doUpdateUpDown(data, dispatch);
  }

  const getPostingEle_res = await instance.get(
    `/api/get_posting/getPostingEle?id=${nowPostingEleObj.id}&board_type=${nowPostingEleObj.board_type}`,
  );
  const nowPostingEleObjRaw = {
    ...getPostingEle_res.data,
    board_type: nowPostingEleObj.board_type,
  };
  setNowPostingEleObj(nowPostingEleObjRaw);
}
