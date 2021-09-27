import { VscError } from 'react-icons/vsc';
import styled from 'styled-components';

// IcoError
// 분류 : 아이콘
// 용도 : 에러 페이지 아이콘

const Styles = styled.div`
  font-size: 26px;
  transform: translateY(10%);
  color: #20c997;
`;

export default function IcoError() {
  return (
    <Styles>
      <VscError />
    </Styles>
  );
}
