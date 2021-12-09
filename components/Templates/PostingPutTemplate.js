import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import PostingPutPage from '../Organisms/postingPutPage';
import PostingPutBoardTitle from '../Organisms/PostingPutBoardTitle';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingPutTemplate({ boardType, id }) {
  const posting = `/board/posting?boardtype=${boardType}&postid=${id}`;

  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL={posting}>
          <PostingPutBoardTitle />
        </BoardTitleTemplate>
        <PostingPutPage />
      </BoxStyles>
    </CtnBox>
  );
}
