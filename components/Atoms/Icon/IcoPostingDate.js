import { BiTime } from 'react-icons/bi';
import styled from 'styled-components';

// IcoPostingDate
// 분류 : 아이콘
// 용도 : 포스팅 페이지에서 포스팅 날짜 옆의 아이콘

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #20c997;
  height: 17px;
`;

export default function IcoPostingDate() {
  return (
    <Styles>
      <BiTime />
    </Styles>
  );
}
