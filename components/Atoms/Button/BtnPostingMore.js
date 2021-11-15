import { FiMoreHorizontal } from 'react-icons/fi';
import styled from 'styled-components';

// BtnPostingMore
// 분류 : 버튼
// 용도 : 포스팅 페이지의 더보기 버튼

const Styles = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: #20c997;
  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

export default function BtnPostingMore() {
  return (
    <Styles>
      <FiMoreHorizontal />
    </Styles>
  );
}
