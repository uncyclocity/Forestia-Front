import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

// IcoMoreEditPosting
// 분류 : 아이콘
// 용도 : 포스팅 페이지 더보기 영역 '수정' 버튼의 아이콘

const Styles = styled.div`
  position: relative;
  top: 2px;
  font-size: 20px;
`;

export default function IcoMoreEditPosting() {
  return (
    <Styles>
      <FiEdit />
    </Styles>
  );
}
