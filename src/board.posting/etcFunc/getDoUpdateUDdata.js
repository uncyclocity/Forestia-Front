import { posting } from '../../doApi/doApi';

export default function getDoUpdateUDdata(
  udType,
  revUdType,
  udClickerArr,
  revUdClickerArr,
  board_type,
  post_id,
  userName,
  dispatch,
) {
  const defaultData = {
    board_type,
    post_id,
    ud_type: udType,
    userName,
  };

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
