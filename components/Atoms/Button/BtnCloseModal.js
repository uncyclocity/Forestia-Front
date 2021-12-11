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
`;

export default function BtnCloseModal({ onClick }) {
  return (
    <Styles onClick={onClick}>
      <AiOutlineClose />
    </Styles>
  );
}
