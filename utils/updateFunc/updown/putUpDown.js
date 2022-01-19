import { doPosting, doUpDown } from '../../doApi';

const revUdType = {
  up: 'down',
  down: 'up',
};

export const putUpDown = async ({
  udType,
  nowPostingEleObj,
  userId,
  dispatch,
  setNowPostingEleObj,
  postCnt,
}) => {
  if (!postCnt) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    let data = {
      boardType: nowPostingEleObj.boardType,
      postId: nowPostingEleObj.id,
      udType,
      userId,
    };

    const udClickerArr = nowPostingEleObj[udType].clicker;
    const revUdClickerArr = nowPostingEleObj[revUdType[udType]].clicker;

    if (udClickerArr.find((clickUser) => clickUser === userId)) {
      data = {
        ...data,
        operation: 'sub',
      };
    } else if (revUdClickerArr.find((clickUser) => clickUser === userId)) {
      data = {
        ...data,
        revUdType: revUdType[udType],
        operation: 'addsub',
      };
    } else {
      data = {
        ...data,
        operation: 'add',
      };
    }
    await doUpDown.put(data);

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
  }
};
