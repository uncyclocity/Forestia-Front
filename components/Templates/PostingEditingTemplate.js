import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import PostingEditingPage from '../Organisms/postingEditingPage';
import PostingEditingBoardTitle from '../Organisms/PostingEditingBoardTitle';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingEditingTemplate({ board_type, id }) {
  const posting = `/board/posting?board_type=${board_type}&post_id=${id}`;

  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL={posting}>
          <PostingEditingBoardTitle />
        </BoardTitleTemplate>
        <PostingEditingPage />
      </BoxStyles>
    </CtnBox>
  );
}
