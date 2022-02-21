import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import FreeListBoardTitle from '../Organisms/FreeListBoardTitle';
import FreeListPostingList from '../Organisms/FreeListPostingList';
import ListPageBtn from '../MoleCules/ListPageBtn';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function FreeListTemplate({
  freeLen,
  page,
  nowList,
  authorArr,
}) {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/">
          <FreeListBoardTitle />
        </BoardTitleTemplate>
        <FreeListPostingList
          freeBoard={nowList}
          page={page}
          authorArr={authorArr}
        />
        {freeLen > 0 && (
          <ListPageBtn boardType="free" postingAmount={freeLen} page={page} />
        )}
      </BoxStyles>
    </CtnBox>
  );
}
