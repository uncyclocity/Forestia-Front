import styled from 'styled-components';

// TxtUpDownCommAmount
// 분류 : 텍스트
// 용도 : 포스팅 페이지 좋아요 싫어요 댓글 개수

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
  }
`;

export default function TxtUpDownCommAmount({ amount, size, mSize }) {
  return (
    <Styles size={size} mSize={mSize}>
      {amount}
    </Styles>
  );
}
