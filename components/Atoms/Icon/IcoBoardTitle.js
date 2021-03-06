import {
  AiOutlineCamera,
  AiOutlineCloud,
  AiOutlineEdit,
  AiOutlineInfoCircle,
  AiOutlineLogin,
} from 'react-icons/ai';
import { RiDeleteBin7Line } from 'react-icons/ri';
import styled from 'styled-components';

// IcoBoardTitle
// 분류 : 아이콘
// 용도 : BoardTitle에서 현 페이지를 나타내는 아이콘

const Styles = styled.div`
  color: #20c997;
  font-size: 35px;
`;

export default function IcoBoardTitle({ nowPage }) {
  return (
    <Styles>
      {nowPage === 'about' && <AiOutlineInfoCircle />}
      {nowPage === 'free' && <AiOutlineCloud />}
      {nowPage === 'photo' && <AiOutlineCamera />}
      {nowPage === 'delete' && <RiDeleteBin7Line />}
      {(nowPage === 'put' || nowPage === 'post') && <AiOutlineEdit />}
      {nowPage === 'signup' && <AiOutlineLogin />}
    </Styles>
  );
}
