import styled from 'styled-components';

// TxtCommentAmount
// 분류 : 텍스트
// 용도 : 각 게시글의 댓글 수를 나타냄

export default function TxtCommentAmount({ children }) {
  const AmountStyle = styled.div`
    width: 13px;
    height: auto;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #20c997;
  `;

  return <AmountStyle>[{children}]</AmountStyle>;
}
