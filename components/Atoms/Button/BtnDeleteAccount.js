import styled from 'styled-components';

// BtnDeleteAccount
// 분류 : 버튼
// 용도 : 계정 설정 모달창에서의 계정 삭제 버튼

const Styles = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: rgb(255, 102, 102);

  &:hover {
    color: rgb(255, 135, 135);
  }
`;

export default function BtnDeleteAccount({ onClick }) {
  return <Styles onClick={onClick}>계정 삭제</Styles>;
}
