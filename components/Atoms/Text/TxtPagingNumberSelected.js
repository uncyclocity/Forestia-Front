import styled from 'styled-components';

// TxtPostingNumberSelected
// 분류 : 텍스트
// 용도 : 선택된 리스트 페이징 넘버

const Styles = styled.div`
    margin 0 5px;
    font-family: 'NanumSquareEB';
  `;

export default function TxtPagingNumberSelected({ number }) {
  return <Styles>{number}</Styles>;
}
