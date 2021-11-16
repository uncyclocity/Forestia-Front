import styled from 'styled-components';

// TxtCommentContent
// 분류 : 텍스트
// 용도 : 댓글 내용 띄우기

const Styles = styled.div`
  color: #525252;
`;

export default function TxtCommentContent({ content }) {
  return <Styles>{content}</Styles>;
}
