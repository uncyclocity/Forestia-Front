import { posting } from './doApi';

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
  console.log(revUdClickerArr);
  if (udClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      board_type,
      post_id,
      ud_type: udType,
      operation: 'sub',
      userName,
    };
    posting.doUpdateUpDown(data, dispatch);
  } else if (revUdClickerArr.find((clickUser) => clickUser === userName)) {
    const data = {
      board_type,
      post_id,
      ud_type: udType,
      rev_ud_type: revUdType,
      operation: 'addsub',
      userName,
    };
    posting.doUpdateUpDown(data, dispatch);
  } else {
    const data = {
      board_type,
      post_id,
      ud_type: udType,
      operation: 'add',
      userName,
    };
    posting.doUpdateUpDown(data, dispatch);
  }
}
