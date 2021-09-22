import { SiNextDotJs } from 'react-icons/si';
import styled from 'styled-components';

// IcoNextjs
// 분류 : 아이콘
// 용도 : 게시판 정보 페이지에서 표시되는 next.js 아이콘

export default function IcoNextjs() {
  const Styles = styled.div`
    color: #20c997;
    height: 100px;
    margin: 30px 40px 20px 40px;
    font-size: 90px;
  `;

  return (
    <Styles>
      <SiNextDotJs />
    </Styles>
  );
}
