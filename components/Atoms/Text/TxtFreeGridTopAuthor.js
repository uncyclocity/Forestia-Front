import styled from 'styled-components';

// TxtFreeGridTopAuthor
// 분류 : 텍스트
// 용도 : 자게 리스트 그리드 최상단 텍스트 "작성자"

const Styles = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99px;
  font-family: 'NanumSquareEB';
  color: #828c99;
`;

export default function TxtFreeGridTopAuthor() {
  return <Styles>작성자</Styles>;
}
