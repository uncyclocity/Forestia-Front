import { lighten } from 'polished';
import styled from 'styled-components';

// BtnDeleteAccount
// 분류 : 버튼
// 용도 : 계정 설정 모달창에서의 계정 삭제 버튼

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  cursor: pointer;
  color: ${({ color }) => color};

  &:hover {
    color: ${({ color }) => lighten(0.1, color)};
  }

  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
  }
`;

export default function BtnDeleteAccount({
  text,
  color,
  size,
  mSize,
  onClick,
}) {
  return (
    <Styles color={color} size={size} mSize={mSize} onClick={onClick}>
      {text}
    </Styles>
  );
}
