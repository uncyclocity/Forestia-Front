import styled from 'styled-components';

// TxtComment
// 분류 : 텍스트
// 용도 : 포스팅 페이지의 '댓글' 텍스트

const Styles = styled.div`
  font-size: 17px;
  font-family: 'NanumSquareEB';
  color: #828c99;
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export default function TxtComment() {
  return <Styles>댓글</Styles>;
}
