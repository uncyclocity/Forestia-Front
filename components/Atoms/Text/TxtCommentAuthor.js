import styled from 'styled-components';

// TxtCommentAuthor
// 분류 : 텍스트
// 용도 : 댓글 작성자

const Styles = styled.div`
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
`;

export default function TxtCommentAuthor({ author }) {
  return <Styles>{author}</Styles>;
}
