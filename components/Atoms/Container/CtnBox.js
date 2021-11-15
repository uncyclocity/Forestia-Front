import styled from 'styled-components';

// CtnBox
// 분류 : 컨테이너
// 용도 : 박스 형태의 컨테이너

const BoxStyles = styled.div`
  width: 700px;

  margin: 15px auto;

  background: white;
  border-radius: 25px;

  box-shadow: 0px 5px 5px #dedede;

  @media screen and (max-width: 700px) {
    width: 335px;
  }
`;

export default function CtnBox({ children }) {
  return <BoxStyles>{children}</BoxStyles>;
}
