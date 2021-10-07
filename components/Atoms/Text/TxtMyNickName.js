import styled from 'styled-components';

// TxtMyNickName
// 분류 : 텍스트
// 용도 : 회원가입 페이지 닉네임 입력란 옆의 텍스트

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'NanumSquareR';
  font-size: 20px;
  color: #5d5d5d;
`;

export default function TxtMyNickName() {
  return <Styles>닉네임 :&nbsp;</Styles>;
}
