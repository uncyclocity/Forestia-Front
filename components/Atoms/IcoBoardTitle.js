import {
  AiOutlineCamera,
  AiOutlineCloud,
  AiOutlineEdit,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import { RiDeleteBin7Line } from 'react-icons/ri';
import styled from 'styled-components';

export default function IcoBoardTitle(nowPage) {
  const Styles = styled.div`
    font-size: 35px;
  `;

  return (
    <Styles>
      {nowPage === 'about' && <AiOutlineInfoCircle />}
      {nowPage === 'free' && <AiOutlineCloud />}
      {nowPage === 'photo' && <AiOutlineCamera />}
      {nowPage === 'deleting' && <RiDeleteBin7Line />}
      {nowPage === 'editing' && <AiOutlineEdit />}
    </Styles>
  );
}
