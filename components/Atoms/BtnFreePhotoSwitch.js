import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled, { css } from 'styled-components';

// BtnFreePhotoSwitch
// 분류 : 버튼
// 설명 : 포스팅 작성 페이지에서 업로드를 원하는 게시판을 선택할 수 있도록 한다.

export const BtnFreePhotoSwitch = ({ selBoard, setSelBoard }) => {
  const LayoutStyle = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: row;
  `;

  const SwitchStyle = styled.div`
    width: 65px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    border: 2px solid #20c997;

    ${({ targetBoard }) =>
      targetBoard === 'free'
        ? css`
            border-radius: 7px 0 0 7px;
            border-right: 1px solid #20c997;
          `
        : css`
            border-radius: 0 7px 7px 0;
            border-left: 1px solid #20c997;
          `}

    cursor: pointer;

    ${({ selBoard, targetBoard }) =>
      selBoard === targetBoard
        ? css`
            color: white;
            background: #20c997;
          `
        : css`
            color: #20c997;
          `}

    .board_name {
      margin-left: 5px;
      font-size: 15px;
    }
  `;

  return (
    <LayoutStyle>
      <SwitchStyle
        selBoard={selBoard}
        targetBoard={'free'}
        onClick={() => selBoard === 'photo' && setSelBoard('free')}
      >
        <AiOutlineCloud />
        <div className="board_name">자게</div>
      </SwitchStyle>
      <SwitchStyle
        selBoard={selBoard}
        targetBoard={'photo'}
        onClick={() => selBoard === 'free' && setSelBoard('photo')}
      >
        <AiOutlineCamera />
        <div className="board_name">짤게</div>
      </SwitchStyle>
    </LayoutStyle>
  );
};
