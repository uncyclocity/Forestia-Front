import styled from 'styled-components';

// TxtProfileName
// 분류 : 텍스트
// 용도 : 홈의 프로필 박스에서 유저네임 띄우기

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: #828c99;
`;

export default function TxtProfileName({ userName }) {
  return <Styles>{userName}</Styles>;
}
