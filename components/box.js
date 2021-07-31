import styled from "styled-components";

// 높이값은 이를 사용하는 각 파일에서 설정
const BoxStyles = styled.div`
  width: 700px;

  margin: 0 auto;
  margin-top: 30px;

  background: white;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

export default function Box({ children }) {
  return <BoxStyles>{children}</BoxStyles>;
}
