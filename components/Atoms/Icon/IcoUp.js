import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../Contexts/context';

// IcoUp
// 분류 : 아이콘
// 용도 : 포스팅 페이지의 좋아요 아이콘

const Styles = styled.div`
  font-size: 30px;
  height: 30px;
  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

export default function IcoUp({ clicker }) {
  const userId = useReducerState().user.userId;

  return (
    <Styles>
      {clicker.find((clickUser) => clickUser === userId) ? (
        <AiFillLike />
      ) : (
        <AiOutlineLike />
      )}
    </Styles>
  );
}
