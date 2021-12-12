import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

// BtnCloseModal
// 분류 : 버튼
// 용도 : 모달창 닫는 용도의 버튼

const Styles = styled.div`
  font-size: 25px;
  height: 25px;
  color: #20c997;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    font-size: 18px;
    height: 18px;
  }
`;

export default function BtnCloseModal({ onClick }) {
  return (
    <Styles onClick={onClick}>
      <AiOutlineClose />
    </Styles>
  );
}
