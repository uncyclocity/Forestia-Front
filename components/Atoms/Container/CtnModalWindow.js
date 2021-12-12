import styled from 'styled-components';

// CtnModalWindow
// 분류 : 컨테이너
// 용도 : 모달 창의 컨테이너

const Styles = styled.div`
  border-radius: 15px;
  padding: 20px;
  background: white;
  width: 400px;

  @media screen and (max-width: 700px) {
    width: 300px;
    padding: 15px;
  }
`;

export default function CtnModalWindow({ children }) {
  return <Styles>{children}</Styles>;
}
