import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import PostingPutPage from '../Organisms/PostingPutPage';
import PostingPutBoardTitle from '../Organisms/PostingPutBoardTitle';

const BoxStyle = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

const ViewStyle = styled.div`
  padding-top: 20px;
`;

export default function PostingPutTemplate({ boardType, id }) {
  const posting = `/board/posting?boardtype=${boardType}&postid=${id}`;

  return (
    <CtnBox>
      <BoxStyle>
        <BoardTitleTemplate backURL={posting}>
          <PostingPutBoardTitle />
        </BoardTitleTemplate>
        <ViewStyle>
          <PostingPutPage />
        </ViewStyle>
      </BoxStyle>
    </CtnBox>
  );
}
