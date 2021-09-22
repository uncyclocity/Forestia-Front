import styled from 'styled-components';

// TxtPostingNumber
// 분류 : 텍스트
// 용도 : 선택되지 않은 리스트 페이징 넘버

export default function TxtPagingNumber({ number }) {
  const Styles = styled.div`
    margin 0 5px;
  `;

  return <Styles>{number}</Styles>;
}
