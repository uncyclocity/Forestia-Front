import styled from 'styled-components';

// TxtCommentAmount
// 분류 : 텍스트
// 용도 : 각 게시글의 댓글 수를 나타냄

export default function TxtCommentAmount({ children }) {
  const AmountStyle = styled.div`
    width: 13px;
    font-size: 12px;
  `;

  return <AmountStyle>{children}</AmountStyle>;
}
