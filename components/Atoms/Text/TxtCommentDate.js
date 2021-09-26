import styled from 'styled-components';

// TxtCommentDate
// 분류 : 텍스트
// 용도 : 댓글 작성날짜

const Styles = styled.div`
  margin-right: 10px;
  position: relative;
  top: 1px;
  color: #828c99;
  font-size: 14px;
`;

export default function TxtCommentDate({ date }) {
  return <Styles>{date}</Styles>;
}
