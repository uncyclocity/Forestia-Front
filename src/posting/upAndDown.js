import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../_context';
import getDoUpdateUDdata from './getDoUpdateUDdata';

const Styles = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #20c997;

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

export default function UpAndDown({ nowPostingEleObj }) {
  const userName = useReducerState().userName;
  const dispatch = useDispatch();

  return (
    <Styles>
      <div
        className="ud_btn_area"
        onClick={() =>
          getDoUpdateUDdata(
            'up',
            'down',
            nowPostingEleObj.up.clicker,
            nowPostingEleObj.down.clicker,
            nowPostingEleObj.board_type,
            nowPostingEleObj.id,
            userName,
            dispatch,
          )
        }
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
        onClick={() =>
          getDoUpdateUDdata(
            'down',
            'up',
            nowPostingEleObj.down.clicker,
            nowPostingEleObj.up.clicker,
            nowPostingEleObj.board_type,
            nowPostingEleObj.id,
            userName,
            dispatch,
          )
        }
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
    </Styles>
  );
}
