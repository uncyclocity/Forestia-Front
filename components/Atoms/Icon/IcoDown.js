import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../../src/common/context';

// IcoDown
// 분류 : 아이콘
// 용도 : 포스팅 페이지의 싫어요 아이콘

const Styles = styled.div`
  font-size: 30px;
  height: 30px;
`;

export default function IcoDown({ clicker }) {
  const userName = useReducerState().userName;

  return (
    <Styles>
      {clicker.find((clickUser) => clickUser === userName) ? (
        <AiFillDislike />
      ) : (
        <AiOutlineDislike />
      )}
    </Styles>
  );
}
