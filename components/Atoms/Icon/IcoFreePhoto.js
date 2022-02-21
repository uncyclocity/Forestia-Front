import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled from 'styled-components';

// IcoFreePhoto
// 분류 : 아이콘
// 용도 : 포스팅 수정 페이지에 표시되는 게시판 종류

const Styles = styled.div`
  .board_sign {
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${({ iconSize }) => iconSize}px;

    border: 2px solid #20c997;
    border-radius: 7px;

    background: #20c997;
    color: white;

    .board_name {
      margin-left: 5px;
      font-size: ${({ textSize }) => textSize}px;
    }
  }
`;

export default function IcoFreePhoto({
  boardType,
  width,
  height,
  iconSize,
  textSize,
}) {
  return (
    <Styles
      width={width}
      height={height}
      iconSize={iconSize}
      textSize={textSize}
    >
      {boardType === 'free' && (
        <div className="board_sign">
          <AiOutlineCloud />
          <div className="board_name">자게</div>
        </div>
      )}
      {boardType === 'photo' && (
        <div className="board_sign">
          <AiOutlineCamera />
          <div className="board_name">짤게</div>
        </div>
      )}
    </Styles>
  );
}
