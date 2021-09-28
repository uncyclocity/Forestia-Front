import styled from 'styled-components';

// TxtFreeGridTopDate
// 분류 : 텍스트
// 용도 : 자게 리스트 그리드 최상단 텍스트 "작성일"

const Styles = styled.div`
  height: 30px;
  width: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #828c99;
`;

export default function TxtFreeGridTopDate() {
  return <Styles>작성일</Styles>;
}
