import styled, { css } from 'styled-components';

// BtnHeader
// 분류 : 버튼
// 용도 : 헤더의 버튼

const Styles = styled.div`
  cursor: pointer;

  .menu_icon {
    height: 30px;
    margin-bottom: 3px;
  }

  .menu_name {
    display: flex;
    justify-content: center;
    font-size: 13px;
  }

  ${(props) =>
    props.isSelected
      ? css`
          color: #20c997;

          &:hover {
            transition: 0.15s all ease-in;
            color: #6debac;
          }

          &:not(:hover) {
            transition: 0.15s all ease-in;
            color: #20c997;
          }
        `
      : css`
          &:hover {
            transition: 0.15s all ease-in;
            color: #6debac;
          }

          &:not(:hover) {
            transition: 0.15s all ease-in;
            color: #828c99;
          }
        `}
`;

export default function BtnHeader({ btnText, isSelected, children }) {
  return (
    <Styles isSelected={isSelected}>
      <div className="menu_icon">{children}</div>
      <div className="menu_name">{btnText}</div>
    </Styles>
  );
}
