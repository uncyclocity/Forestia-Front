import styled from 'styled-components';

// TxtSubCatchphrase
// 분류 : 텍스트
// 용도 : 인덱스 페이지 캐치프레이즈의 서브네임

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};

  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
  }
`;

export default function TxtSubCatchphrase({ size, mSize, color, text }) {
  return (
    <Styles size={size} mSize={mSize} color={color}>
      {text}
    </Styles>
  );
}
