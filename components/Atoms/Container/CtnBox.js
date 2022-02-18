import styled from 'styled-components';

// CtnBox
// 분류 : 컨테이너
// 용도 : 박스 형태의 컨테이너

const BoxStyles = styled.div`
  width: 100%;

  margin: 10px auto;

  background: white;
  border-radius: 15px;

  box-shadow: 0px 2px 4px #dedede;

  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export default function CtnBox({ children }) {
  return <BoxStyles>{children}</BoxStyles>;
}
