import styled from 'styled-components';
import { putUpDown } from '../../utils/updateFunc/updown/putUpDown';
import IcoDown from '../Atoms/Icon/IcoDown';
import IcoUp from '../Atoms/Icon/IcoUp';
import TxtUpDownAmount from '../Atoms/Text/TxtUpDownAmount';
import { useDispatch, useReducerState } from '../Contexts/context';

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
            if (userId) {
              if (!postCnt) {
                putUpDown({
                  udType: 'up',
                  nowPostingEleObj,
                  userId,
                  dispatch,
                  setNowPostingEleObj,
                });
              }
            } else {
              alert('로그인이 필요합니다.');
            }
          }}
        >
          <IcoUp clicker={nowPostingEleObj.up.clicker} />
          <TxtUpDownAmount amount={nowPostingEleObj.up.amount} />
        </div>

        <div
          className="ud_btn_area"
          onClick={() => {
            if (userId) {
              if (!postCnt) {
                putUpDown({
                  udType: 'down',
                  nowPostingEleObj,
                  userId,
                  dispatch,
                  setNowPostingEleObj,
                });
              }
            } else {
              alert('로그인이 필요합니다.');
            }
          }}
        >
          <IcoDown clicker={nowPostingEleObj.down.clicker} />
          <TxtUpDownAmount amount={nowPostingEleObj.down.amount} />
        </div>
      </UpAndDownBtnStyle>
    </UpAndDownAreaStyle>
  );
}
