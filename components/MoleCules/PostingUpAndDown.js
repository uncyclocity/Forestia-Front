import styled from 'styled-components';
import IcoDown from '../Atoms/Icon/IcoDown';
import IcoUp from '../Atoms/Icon/IcoUp';
import TxtUpDownAmount from '../Atoms/Text/TxtUpDownAmount';
import { useDispatch, useReducerState } from '../../src/common/context';
import getDoUpdateUDdata from '../../src/board/posting/etcFunc/getDoUpdateUDdata';

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
  const userName = state.userName;
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
                userName,
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
                userName,
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
