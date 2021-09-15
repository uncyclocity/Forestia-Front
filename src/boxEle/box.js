import styled from 'styled-components';

// 높이값은 이를 사용하는 각 파일에서 설정
const BoxStyles = styled.div`
  max-width: 700px;

  margin: 0 auto;
  margin-top: 30px;

  background: white;
  border-radius: 20px;

  box-shadow: 0px 5px 5px #dedede;
`;

export default function Box({ children }) {
  return <BoxStyles>{children}</BoxStyles>;
}
