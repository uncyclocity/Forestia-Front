import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled from 'styled-components';

// IcoBoard4Index
// 분류 : 아이콘
// 용도 : 홈 페이지에서의 게시판 아이콘을 나타냄

const Styles = styled.div`
  height: 30px;
  font-size: 30px;
`;

export default function IcoBoard4Index({ boardName }) {
  return (
    <Styles>
      {boardName === 'free' ? <AiOutlineCloud /> : <AiOutlineCamera />}
    </Styles>
  );
}
