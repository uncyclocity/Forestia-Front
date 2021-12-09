import styled from 'styled-components';
import IcoDown from '../Atoms/Icon/IcoDown';
import IcoUp from '../Atoms/Icon/IcoUp';
import TxtUpDownAmount from '../Atoms/Text/TxtUpDownAmount';
import { useDispatch, useReducerState } from '../../src/context';
import { doPosting, doUpDown } from '../../src/doApi';

const getDoUpdateUDdata = async (
  udType,
  revUdType,
  nowPostingEleObj,
  userId,
  dispatch,
  setNowPostingEleObj,
) => {
  const defaultData = {
    board_type: nowPostingEleObj.board_type,
    post_id: nowPostingEleObj.id,
    ud_type: udType,
    userId,
  };

  const udClickerArr = nowPostingEleObj[udType].clicker;
  const revUdClickerArr = nowPostingEleObj[revUdType].clicker;

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
      rev_ud_type: revUdType,
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
    nowPostingEleObj.board_type,
    nowPostingEleObj.id,
  );

  const nowPostingEleObjUpdated = {
    ...getPostingEle,
    board_type: nowPostingEleObj.board_type,
  };

  setNowPostingEleObj(nowPostingEleObjUpdated);

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};

const UpAndDownAreaStyle = styled.div`
  width: 100%;
  margin: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #20c997;
`;

const UpAndDownBtnStyle = styled.div`
  display: flex;
  flex-direction: row;

  .ud_btn_area {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    width: 45px;

    &:last-child {
      margin-left: 20px;
    }

    .icon {
      font-size: 30px;
      height: 30px;
    }

    .amount {
      font-size: 20px;
    }
  }
`;

export default function PostingUpAndDown({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  const state = useReducerState();
  const postCnt = state.postCnt;
  const userId = state.user.userId;
  const dispatch = useDispatch();

  return (
    <UpAndDownAreaStyle>
      <UpAndDownBtnStyle>
        <div
          className="ud_btn_area"
          onClick={() => {
            !postCnt &&
              getDoUpdateUDdata(
                'up',
                'down',
                nowPostingEleObj,
                userId,
                dispatch,
                setNowPostingEleObj,
              );
          }}
        >
          <IcoUp clicker={nowPostingEleObj.up.clicker} />
          <TxtUpDownAmount amount={nowPostingEleObj.up.amount} />
        </div>

        <div
          className="ud_btn_area"
          onClick={() => {
            !postCnt &&
              getDoUpdateUDdata(
                'down',
                'up',
                nowPostingEleObj,
                userId,
                dispatch,
                setNowPostingEleObj,
              );
          }}
        >
          <IcoDown clicker={nowPostingEleObj.down.clicker} />
          <TxtUpDownAmount amount={nowPostingEleObj.down.amount} />
        </div>
      </UpAndDownBtnStyle>
    </UpAndDownAreaStyle>
  );
}
