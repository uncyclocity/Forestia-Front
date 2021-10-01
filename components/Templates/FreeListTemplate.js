import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import FreeListBoardTitle from '../Organisms/FreeListBoardTitle';
import FreeListPage from '../Organisms/FreeListPage';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function FreeListTemplate({
  freeLen,
  nowPage,
  nowList,
  setNowPage,
}) {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/home">
          <FreeListBoardTitle />
        </BoardTitleTemplate>
        <FreeListPage
          freeLen={freeLen}
          nowPage={nowPage}
          nowList={nowList}
          setNowPage={setNowPage}
        />
      </BoxStyles>
    </CtnBox>
  );
}
