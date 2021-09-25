import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';

// BtnPostingMore
// 분류 : 버튼
// 용도 : 포스팅 페이지의 더보기 버튼

const Styles = styled.div`
  cursor: pointer;
  width: 35px;
  font-size: 30px;
  height: 30px;
`;

export default function BtnPostingMore() {
  return (
    <Styles>
      <FiMoreHorizontal />
    </Styles>
  );
}
