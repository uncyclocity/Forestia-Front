import { posting } from '../../doApi/doApi';

export default function getDoUpdateUDdata(
  udType,
  revUdType,
  nowPostingEleObj,
  userName,
  dispatch,
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
    posting.doUpdateUpDown(data, dispatch);
  } else if (revUdClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      ...defaultData,
      rev_ud_type: revUdType,
      operation: 'addsub',
    };
    posting.doUpdateUpDown(data, dispatch);
  } else {
    const data = {
      ...defaultData,
      operation: 'add',
    };
    posting.doUpdateUpDown(data, dispatch);
  }
}
