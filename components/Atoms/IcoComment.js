import { FaRegCommentAlt } from 'react-icons/fa';
import styled from 'styled-components';

// IcoComment
// 분류 : 아이콘
// 용도 : 포스팅 리스트 댓글 수 옆 댓글 아이콘

const Styles = styled.div`
  font-size: 12px;
  margin: 0 3px;
`;

export default function IcoComment({ children }) {
  return (
    <Styles>
      <FaRegCommentAlt />
    </Styles>
  );
}
