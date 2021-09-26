import { BiChevronRight } from 'react-icons/bi';
import styled from 'styled-components';

// BtnGotoBoard4Home
// 분류 : 버튼
// 용도 : 홈의 각 게시판 박스에서 해당 게시판으로 이동할 수 있도록 함

const Styles = styled.div`
  cursor: pointer;
  height: 20px;
  margin-left: 5px;
  font-size: 20px;
`;

export default function BtnGotoBoard4Home({ onClick }) {
  return (
    <Styles onClick={onClick}>
      <BiChevronRight />
    </Styles>
  );
}
