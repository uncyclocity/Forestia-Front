import styled from 'styled-components';

// LinCommentBetweenAmountAndList
// 분류 : 선
// 용도 : 댓글 수 - 댓글 리스트 사이의 선

const Styles = styled.div`
  hr {
    border: 0;
    background: #e9ecef;
    height: 1px;
    margin: 0;
  }
`;

export default function LinCommentBetweenAmountAndList() {
  return (
    <Styles>
      <hr />
    </Styles>
  );
}
