import styled from 'styled-components';

// TxtPostingNumber
// 분류 : 텍스트
// 용도 : 선택되지 않은 리스트 페이징 넘버

const Styles = styled.div`
    margin 0 5px;
  `;

export default function TxtPagingNumber({ number }) {
  return <Styles>{number}</Styles>;
}
