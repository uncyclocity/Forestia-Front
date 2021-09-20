import styled from 'styled-components';

// TxtProfileName
// 분류 : 텍스트
// 용도 : 홈의 프로필 박스에서 유저네임 띄우기

export default function TxtProfileName({ userName }) {
  const Styles = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return <Styles>{userName}</Styles>;
}
