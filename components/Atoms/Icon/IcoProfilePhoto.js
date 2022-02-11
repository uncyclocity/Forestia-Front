import { BsPerson } from 'react-icons/bs';
import styled from 'styled-components';

// IcoProfilePhoto
// 분류 : 아이콘
// 용도 : 홈의 프로필 블럭에서 프로필 사진으로 표시

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 165px;
  color: white;
  background: #20c997;
  border-radius: 30px 0 0 30px;
  font-size: 60px;

  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`;

export default function IcoProfilePhoto() {
  return (
    <Styles>
      <BsPerson />
    </Styles>
  );
}
