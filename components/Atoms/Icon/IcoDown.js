import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../Contexts/context';

// IcoDown
// 분류 : 아이콘
// 용도 : 포스팅 페이지의 싫어요 아이콘

const Styles = styled.div`
  font-size: ${({ size }) => size}px;
  height: ${({ size }) => parseInt(size) + 3}px;
  @media screen and (max-width: 700px) {
    font-size: ${({ mSize }) => mSize}px;
    height: ${({ mSize }) => parseInt(mSize) + 3}px;
  }
`;

export default function IcoDown({ clicker, size, mSize }) {
  const userId = useReducerState().user.userId;

  return (
    <Styles size={size} mSize={mSize}>
      {clicker.find((clickUser) => clickUser === userId) ? (
        <AiFillDislike />
      ) : (
        <AiOutlineDislike />
      )}
    </Styles>
  );
}
