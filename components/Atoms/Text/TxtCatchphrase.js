import styled from 'styled-components';

// TxtCatchphrase
// 분류 : 텍스트
// 용도 : 헤더에 입력되어 있는 캐치프레이즈

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};

  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
  }
`;

export default function TxtCatchphrase({ size, mSize, color, text }) {
  return (
    <Styles size={size} mSize={mSize} color={color}>
      {text}
    </Styles>
  );
}
