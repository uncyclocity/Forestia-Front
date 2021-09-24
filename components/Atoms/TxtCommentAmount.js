import styled from 'styled-components';

// TxtCommentAmount
// 분류 : 텍스트
// 용도 : 포스팅 페이지에서의 댓글 수

const Styles = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-left: 7px;
  color: #20c997;
`;

export default function TxtCommentAmount({ amount }) {
  return <Styles>{amount}</Styles>;
}
