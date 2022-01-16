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

export default function PhotoListTemplate({ photoLen, page, nowList }) {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate backURL="/">
          <PhotoListBoardTitle />
        </BoardTitleTemplate>
        <PhotoListPostingList photoBoard={nowList} page={page} />
        {photoLen > 0 && (
          <ListPageBtn boardSort="photo" listLen={photoLen} page={page} />
        )}
      </BoxStyles>
    </CtnBox>
  );
}
