import styled from 'styled-components';

// TxtCommentAuthor
// 분류 : 텍스트
// 용도 : 댓글 작성자

const Styles = styled.div`
  font-weight: bold;
  font-size: 15px;
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export default function TxtCommentAuthor({ author }) {
  return <Styles>{author}</Styles>;
}
