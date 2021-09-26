import styled from 'styled-components';

// TxtListEmpty
// 분류 : 텍스트
// 용도 : 홈 페이지에서 각 게시판이 비었을 경우 이를 나타내는 텍스트

const Styles = styled.div`
  margin: 0 5px;
  font-size: 19px;
  color: #babfc7;
`;

export default function TxtListEmpty() {
  return (
    <Styles>
      <div>아직 게시판이</div>
      <div>비어 있어요</div>
    </Styles>
  );
}
