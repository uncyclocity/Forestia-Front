import styled, { css } from 'styled-components';
import { lighten } from 'polished';

// BtnHeader
// 분류 : 버튼
// 용도 : 헤더의 버튼

const Styles = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  font-size: ${({ size }) => size}px;

  ${({ isSelected }) =>
    isSelected
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `};

  &:hover {
    transition: 0.15s all ease-in;
    color: ${({ color }) => lighten(0.1, color)};
  }

  &:not(:hover) {
    transition: 0.15s all ease-in;
    color: ${({ color }) => color};
  }

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    font-size: ${({ mSize }) => mSize}px;
  }
`;

export default function BtnHeader({ btnText, color, size, mSize, isSelected }) {
  return (
    <Styles color={color} size={size} mSize={mSize} isSelected={isSelected}>
      {btnText}
    </Styles>
  );
}
