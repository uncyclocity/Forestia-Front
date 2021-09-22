import { AiOutlineLeft } from 'react-icons/ai';
import styled from 'styled-components';

// IcoPagingLeft
// 분류 : 아이콘
// 용도 : 리스트 페이징 왼쪽 화살표

export default function IcoPagingLeft() {
  const Styles = styled.div`
    position: relative;
    top: 1px;
  `;

  return (
    <Styles>
      <AiOutlineLeft />
    </Styles>
  );
}
