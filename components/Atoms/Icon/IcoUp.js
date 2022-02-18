import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../Contexts/context';

// IcoUp
// 분류 : 아이콘
// 용도 : 포스팅 페이지의 좋아요 아이콘

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  height: ${({ size }) => parseInt(size) + 3}px;
  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
    height: ${({ mSize }) => parseInt(mSize) + 3}px;
  }
`;

export default function IcoUp({ clicker, size, mSize }) {
  const userId = useReducerState().user.userId;

  return (
    <Styles size={size} mSize={mSize}>
      {clicker.find((clickUser) => clickUser === userId) ? (
        <AiFillLike />
      ) : (
        <AiOutlineLike />
      )}
    </Styles>
  );
}
