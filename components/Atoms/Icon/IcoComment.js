import styled from 'styled-components';

// IcoComment
// 분류 : 아이콘
// 용도 : 포스팅 리스트 댓글 수 옆 댓글 아이콘

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  height: ${({ size }) => parseInt(size) + 3}px;
  color: ${({ color }) => color};
  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
    height: ${({ mSize }) => parseInt(mSize) + 3}px;
  }
`;

export default function IcoComment({ icon, size, color, mSize }) {
  return (
    <Styles size={size} color={color} mSize={mSize}>
      {icon}
    </Styles>
  );
}
