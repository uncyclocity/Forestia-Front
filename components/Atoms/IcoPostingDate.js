import { BiTime } from 'react-icons/bi';
import styled from 'styled-components';

// IcoPostingDate
// 분류 : 아이콘
// 용도 : 포스팅 페이지에서 포스팅 날짜 옆의 아이콘

export default function IcoPostingDate() {
  const Styles = styled.div`
    position: relative;
    top: 1.5px;
  `;

  return (
    <Styles>
      <BiTime />
    </Styles>
  );
}
