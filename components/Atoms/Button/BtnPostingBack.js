import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

// BtnPostingBack
// 분류 : 버튼
// 용도 : 각종 페이지에서의 상위 페이지로 넘어가는 버튼

const Styles = styled.div`
  cursor: pointer;
  width: 35px;
  font-size: 30px;
`;

export default function BtnPostingBack({ onClick }) {
  return (
    <Styles onClick={onClick}>
      <IoIosArrowBack />
    </Styles>
  );
}
