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
  nowPageCnt,
  nowList,
  setNowPageCnt,
}) {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/home">
          <FreeListBoardTitle />
        </BoardTitleTemplate>
        <FreeListPostingList page={nowPageCnt} freeBoard={nowList} />
        {freeLen > 0 && (
          <ListPageBtn
            listLen={freeLen}
            page={nowPageCnt}
            setNowPageCnt={setNowPageCnt}
          />
        )}
      </BoxStyles>
    </CtnBox>
  );
}
