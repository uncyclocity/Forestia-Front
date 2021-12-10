import styled from 'styled-components';

// TxtTellMeYoutNickName
// 분류 : 텍스트
// 용도 : 회원가입 페이지의 닉네임 입력 유도 메세지

const Styles = styled.div`
  width: 100%;
  font-size: 21px;
  color: #5d5d5d;
`;

export default function TxtTellMeYourNickName() {
  return (
    <Styles>
      커뮤니티에서 사용하실
      <br />
      닉네임을 알려주세요!
    </Styles>
  );
}
