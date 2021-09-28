import styled from 'styled-components';

// TxtFreeGridTopName
// 분류 : 텍스트
// 용도 : 자게 리스트 그리드 최상단 텍스트 "제목"

const Styles = styled.div`
  height: 30px;
  width: 428px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #828c99;
`;

export default function TxtFreeGridTopName() {
  return <Styles>제목</Styles>;
}
