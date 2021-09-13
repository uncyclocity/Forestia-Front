import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../../common/context';
import getDoUpdateUDdata from '../etcFunc/getDoUpdateUDdata';

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

export default function UpAndDown({ nowPostingEleObj, setNowPostingEleObj }) {
  const state = useReducerState();
  const userName = state.userName;
  const postCnt = state.postCnt;
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
          <div className="icon">
            <div className="up">
              {nowPostingEleObj.up.clicker.find(
                (clickUser) => clickUser === userName,
              ) ? (
                <AiFillLike />
              ) : (
                <AiOutlineLike />
              )}
            </div>
          </div>
          <div className="amount">
            <div className="up">{nowPostingEleObj.up.amount}</div>
          </div>
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
          <div className="icon">
            <div className="down">
              {nowPostingEleObj.down.clicker.find(
                (clickUser) => clickUser === userName,
              ) ? (
                <AiFillDislike />
              ) : (
                <AiOutlineDislike />
              )}
            </div>
          </div>
          <div className="amount">
            <div className="down">{nowPostingEleObj.down.amount}</div>
          </div>
        </div>
      </UpAndDownBtnStyle>
    </UpAndDownAreaStyle>
  );
}
