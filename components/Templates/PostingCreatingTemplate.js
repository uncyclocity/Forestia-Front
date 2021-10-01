import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import PostingCreatingBoardTitle from '../Organisms/PostingCreatingBoardTitle';
import PostingCreatingPage from '../Organisms/PostingCreatingPage';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingCreatingTemplate() {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/home">
          <PostingCreatingBoardTitle />
        </BoardTitleTemplate>
        <PostingCreatingPage />
      </BoxStyles>
    </CtnBox>
  );
}
