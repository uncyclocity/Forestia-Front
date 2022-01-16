import styled from 'styled-components';

// BtnPostingNumber
// 분류 : 버튼
// 용도 : 선택되지 않은 리스트 페이징 넘버

const Styles = styled.div`
    margin 0 5px;
    cursor: pointer;
  `;

export default function BtnPagingNumber({ number }) {
  return <Styles>{number}</Styles>;
}
