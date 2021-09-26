import styled from 'styled-components';

// TxtCommentAmount4List
// 분류 : 텍스트
// 용도 : 리스트에서 각 게시글의 댓글 수를 나타냄

const AmountStyle = styled.div`
  width: 13px;
  height: auto;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #20c997;
`;

export default function TxtCommentAmount4List({ children }) {
  return <AmountStyle>[{children}]</AmountStyle>;
}
