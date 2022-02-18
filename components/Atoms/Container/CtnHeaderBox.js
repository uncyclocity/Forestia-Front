import styled from 'styled-components';

// CtnHeaderBox
// 분류 : 컨테이너
// 용도 : 박스 형태의 헤더 컨테이너

const BoxStyles = styled.div`
  width: 100%;
  margin: 20px auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 10px;
  }
`;

export default function CtnHeaderBox({ children }) {
  return <BoxStyles>{children}</BoxStyles>;
}
