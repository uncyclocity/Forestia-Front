import styled from 'styled-components';

// TxtWelcome
// 분류 : 텍스트
// 용도 : 회원가입 페이지의 환영 메세지

const Styles = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #20c997;
`;

export default function TxtWelcome() {
  return <Styles>환영합니다!</Styles>;
}
