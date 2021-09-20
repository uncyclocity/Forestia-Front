import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../../common/context';

const FreePhotoSignStyle = styled.div`
  margin: 20px 0;
  .board_sign {
    width: 65px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    border: 2px solid #20c997;
    border-radius: 7px;

    background: #20c997;
    color: white;

    .board_name {
      margin-left: 5px;
      font-size: 15px;
    }
  }
`;

export default function FreePhotoSign() {
  const { board_type } = useReducerState().nowPostingEleObj;

  return (
    <FreePhotoSignStyle>
      {board_type === 'free' && (
        <div className="board_sign">
          <AiOutlineCloud />
          <div className="board_name">자게</div>
        </div>
      )}
      {board_type === 'photo' && (
        <div className="board_sign">
          <AiOutlineCamera />
          <div className="board_name">짤게</div>
        </div>
      )}
    </FreePhotoSignStyle>
  );
}
