import CtnBox from '../Atoms/Container/CtnBox';
import PhotoListBoardTitle from '../Organisms/PhotoListBoardTitle';
import BoardTitleTemplate from './BoardTitleTemplate';
import styled from 'styled-components';
import PhotoListPostingList from '../Organisms/PhotoListPostingList';
import ListPageBtn from '../MoleCules/ListPageBtn';

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
        <PhotoListPostingList page={nowPage} photoBoard={nowList} />
        {photoLen > 0 && (
          <ListPageBtn
            listLen={photoLen}
            page={nowPage}
            setNowPage={setNowPage}
          />
        )}
      </BoxStyles>
    </CtnBox>
  );
}
