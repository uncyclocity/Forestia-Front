import { AiOutlineSmile } from 'react-icons/ai';
import styled from 'styled-components';

// IcoListEmpty
// 분류 : 아이콘
// 용도 : 홈 화면에서 각 게시판이 비었을 경우 이를 나타내는 아이콘

const Styles = styled.div`
  width: 60px;
  height: 60px;
  font-size: 60px;
  color: #babfc7;
`;

export default function IcoListEmpty() {
  return (
    <Styles>
      <AiOutlineSmile />
    </Styles>
  );
}
