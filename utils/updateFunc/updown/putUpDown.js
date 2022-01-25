import { doPosting, doUpDown } from '../../doApi';

const revUdType = {
  up: 'down',
  down: 'up',
};

export const putUpDown = async ({
  udType,
  dispatch,
  postCnt,
  userId,
  nowPostingEleObj,
  setNowPostingEleObj,
}) => {
  if (!postCnt) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    const token = localStorage.getItem('token');

    const data = {
      boardType: nowPostingEleObj.boardType,
      postId: nowPostingEleObj.id,
      udType,
      token,
    };

    const udClickerArr = nowPostingEleObj[udType].clicker;
    const revUdClickerArr = nowPostingEleObj[revUdType[udType]].clicker;

    if (udClickerArr.find((clickUser) => clickUser === userId)) {
      data.operation = 'sub';
    } else if (revUdClickerArr.find((clickUser) => clickUser === userId)) {
      data.revUdType = revUdType[udType];
      data.operation = 'addsub';
    } else {
      data.operation = 'add';
    }

    try {
      await doUpDown.put(data);

      const nowPostingEleObjUpdated = await doPosting.get.ele(
        nowPostingEleObj.boardType,
        nowPostingEleObj.id,
      );

      nowPostingEleObjUpdated.boardType = nowPostingEleObj.boardType;

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
