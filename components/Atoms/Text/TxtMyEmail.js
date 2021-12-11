import styled from 'styled-components';

// TxtMyEmail
// 분류 : 텍스트
// 용도 : 회원가입 페이지에서 표시되는 이메일 정보

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #5d5d5d;
  .email {
    color: #20c997;
  }
`;

export default function TxtMyEmail({ email }) {
  return (
    <Styles>
      <div>이메일 :</div>
      <div className="email">{email}</div>
    </Styles>
  );
}
