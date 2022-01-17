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
    const defaultData = {
      boardType: nowPostingEleObj.boardType,
      postId: nowPostingEleObj.id,
      udType,
      userId,
    };

    const udClickerArr = nowPostingEleObj[udType].clicker;
    const revUdClickerArr = nowPostingEleObj[revUdType[udType]].clicker;

    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    if (udClickerArr.find((clickUser) => clickUser === userId)) {
      const data = {
        ...defaultData,
        operation: 'sub',
      };
      await doUpDown.put(data);
    } else if (revUdClickerArr.find((clickUser) => clickUser === userId)) {
      const data = {
        ...defaultData,
        revUdType: revUdType[udType],
        operation: 'addsub',
      };
      await doUpDown.put(data);
    } else {
      const data = {
        ...defaultData,
        operation: 'add',
      };
      await doUpDown.put(data);
    }

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
