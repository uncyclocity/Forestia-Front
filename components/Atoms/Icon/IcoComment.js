import styled from 'styled-components';

// IcoComment
// 분류 : 아이콘
// 용도 : 포스팅 리스트 댓글 수 옆 댓글 아이콘

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  height: ${({ size }) => parseInt(size) + 3}px;
  color: ${({ color }) => color};
`;

export default function IcoComment({ icon, size, color }) {
  return (
    <Styles size={size} color={color}>
      {icon}
    </Styles>
  );
}
