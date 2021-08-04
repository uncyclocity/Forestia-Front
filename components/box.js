import styled from "styled-components";

// 높이값은 이를 사용하는 각 파일에서 설정
const BoxStyles = styled.div`
  width: 700px;

  margin: 0 auto;
  margin-top: 30px;

  background: white;
  border-radius: 15px;
`;

export default function Box({ children }) {
  return <BoxStyles>{children}</BoxStyles>;
}
