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
  page,
  nowList,
  authorArr,
}) {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/">
          <PhotoListBoardTitle />
        </BoardTitleTemplate>
        <PhotoListPostingList
          photoBoard={nowList}
          page={page}
          authorArr={authorArr}
        />
        {photoLen > 0 && (
          <ListPageBtn boardType="photo" postingAmount={photoLen} page={page} />
        )}
      </BoxStyles>
    </CtnBox>
  );
}
