import CtnBox from '../Atoms/Container/CtnBox';
import PhotoListBoardTitle from '../Organisms/PhotoListBoardTitle';
import PhotoListPage from '../Organisms/PhotoListPage';
import BoardTitleTemplate from './BoardTitleTemplate';
import styled from 'styled-components';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PhotoListTemplate({
  photoLen,
  nowPage,
  nowList,
  setNowPage,
}) {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/home">
          <PhotoListBoardTitle />
        </BoardTitleTemplate>
        <PhotoListPage
          photoLen={photoLen}
          nowPage={nowPage}
          nowList={nowList}
          setNowPage={setNowPage}
        />
      </BoxStyles>
    </CtnBox>
  );
}
