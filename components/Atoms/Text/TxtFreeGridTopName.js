import styled from 'styled-components';

// TxtFreeGridTopName
// 분류 : 텍스트
// 용도 : 자게 리스트 그리드 최상단 텍스트 "제목"

const Styles = styled.div`
  height: 30px;
  width: 100%;
  @media screen and (max-width: 700px) {
    height: 20px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'NanumSquareEB';
  color: #828c99;
`;

export default function TxtFreeGridTopName() {
  return <Styles>제목</Styles>;
}
