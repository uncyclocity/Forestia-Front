import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import PostingPostBoardTitle from '../Organisms/PostingPostBoardTitle';
import PostingPostPage from '../Organisms/PostingPostPage';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingPostTemplate() {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/">
          <PostingPostBoardTitle />
        </BoardTitleTemplate>
        <PostingPostPage />
      </BoxStyles>
    </CtnBox>
  );
}
