import styled from 'styled-components';

// TxtLogo
// 분류 : 텍스트
// 용도 : 상단 로고 텍스트

const Styles = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-family: NanumSquare;
  font-weight: 800;

  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
  }
`;

export default function TxtLogo({ text, color, size, mSize }) {
  return (
    <Styles color={color} size={size} mSize={mSize}>
      {text}
    </Styles>
  );
}
