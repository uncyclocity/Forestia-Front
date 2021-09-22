import styled from 'styled-components';

// TxtPostingNumberSelected
// 분류 : 텍스트
// 용도 : 선택된 리스트 페이징 넘버

export default function TxtPagingNumberSelected({ number }) {
  const Styles = styled.div`
    margin 0 5px;
    font-weight: bold;
    text-decoration: underline;
  `;

  return <Styles>{number}</Styles>;
}
