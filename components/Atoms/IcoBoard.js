import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled from 'styled-components';

export default function IcoBoard({ boardName }) {
  const Styles = styled.div`
    height: 30px;
    font-size: 30px;
  `;

  return (
    <Styles>
      {boardName === 'free' ? <AiOutlineCloud /> : <AiOutlineCamera />}
    </Styles>
  );
}
