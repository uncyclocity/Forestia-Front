import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled from 'styled-components';

// IcoBoard4Home
// 분류 : 아이콘
// 용도 : 홈 페이지에서의 게시판 아이콘을 나타냄

export default function IcoBoard4Home({ boardName }) {
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
