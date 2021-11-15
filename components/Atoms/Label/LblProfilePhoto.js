import { BsPerson } from 'react-icons/bs';
import styled from 'styled-components';

// LblProfilePhoto
// 분류 : 레이블
// 용도 : 홈의 프로필 블럭에서 프로필 사진으로 표시

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 167.5px;
  height: 165px;
  color: white;
  background: #20c997;
  border-radius: 25px 0 0 25px;
  font-size: 70px;

  @media screen and (max-width: 700px) {
    height: 100px;
    font-size: 60px;
    border-radius: 20px 0 0 20px;
  }
`;

export default function LblProfilePhoto() {
  return (
    <Styles>
      <BsPerson />
    </Styles>
  );
}
