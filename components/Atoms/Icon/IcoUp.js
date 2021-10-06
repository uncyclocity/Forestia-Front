import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../../src/context';

// IcoUp
// 분류 : 아이콘
// 용도 : 포스팅 페이지의 좋아요 아이콘

const Styles = styled.div`
  font-size: 30px;
  height: 30px;
`;

export default function IcoUp({ clicker }) {
  const userEmail = useReducerState().user.userEmail;

  return (
    <Styles>
      {clicker.find((clickUser) => clickUser === userEmail) ? (
        <AiFillLike />
      ) : (
        <AiOutlineLike />
      )}
    </Styles>
  );
}
