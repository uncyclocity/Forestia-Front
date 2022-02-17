import styled from 'styled-components';

// IcoLogo
// 분류 : 아이콘
// 용도 : 헤더 최상단의 포레스티아 로고

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  height: ${({ size }) => size}px;
  font-size: ${({ size }) => size}px;

  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
  }
`;

export default function IcoLogo({ icon, color, size, mSize }) {
  return (
    <Styles color={color} size={size} mSize={mSize}>
      {icon}
    </Styles>
  );
}
