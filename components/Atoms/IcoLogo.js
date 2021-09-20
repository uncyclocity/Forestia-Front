import { CgTrees } from 'react-icons/cg';
import styled from 'styled-components';

// IcoLogo
// 분류 : 아이콘
// 용도 : 헤더 최상단의 포레스티아 로고

export default function IcoLogo() {
  const Styles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #20c997;
    cursor: pointer;
    height: 50px;
    font-size: 50px;
  `;

  return (
    <Styles>
      <CgTrees />
    </Styles>
  );
}
