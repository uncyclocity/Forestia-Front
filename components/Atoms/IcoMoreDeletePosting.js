import { RiDeleteBin7Line } from 'react-icons/ri';
import styled from 'styled-components';

// IcoMoreDeletePosting
// 분류 : 아이콘
// 용도 : 포스팅 페이지 더보기 영역 '삭제' 버튼의 아이콘

const Styles = styled.div`
  position: relative;
  top: 2px;
  font-size: 20px;
`;

export default function IcoMoreDeletePosting() {
  return (
    <Styles>
      <RiDeleteBin7Line />
    </Styles>
  );
}
