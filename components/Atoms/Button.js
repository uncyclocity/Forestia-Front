import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled, { css } from 'styled-components';

export const BtnPostingCrud = ({ children }) => {
  const Styles = styled.div`
    background: #20c997;
    color: white;
    border-radius: 5px;
    display: flex;
    height: 35px;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-left: 87%;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      background: #37dfad;
    }
  `;

  return <Styles>{children}</Styles>;
};

export const BtnCommentCrud = ({ children }) => {
  const Styles = styled.div`
    background: #20c997;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;

    &:hover {
      transition: 0.25s all ease-in;
      box-shadow: 0px 0px 15px #36deac;
      cursor: pointer;
    }

    &:not(:hover) {
      transition: 0.25s all ease-in;
      box-shadow: 0px 0px 15px #9aefd6;
    }
  `;

  return <Styles>{children}</Styles>;
};

export const BtnLogInOut = ({ children }) => {
  const Styles = styled.div`
    border: 1px solid #20c997;
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      transition: 0.3s all ease-out;
      color: white;
      background: #20c997;
    }

    &:not(:hover) {
      transition: 0.3s all ease-out;
      color: #20c997;
    }
  `;

  return <Styles>{children}</Styles>;
};

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
