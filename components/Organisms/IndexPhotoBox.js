import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
import IndexBorderTitle from '../MoleCules/IndexBorderTitle';
import IndexPhotoList from '../MoleCules/IndexPhotoList';
import ListEmpty from '../MoleCules/ListEmpty';

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #525252;
`;

const ContentListLayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 7px;
  height: 180px;

  @media screen and (max-width: 700px) {
    height: 120px;
  }

  ul {
    padding: 0px;
  }
`;

export default function IndexPhotoBox({ photoBoard }) {
  const boardName = 'photo';
  const listUrl = '/board/boardlist/photo?page=1';

  return (
    <CtnBox>
      <BoxStyle>
        <IndexBorderTitle boardName={boardName} listUrl={listUrl} />
        <ContentListLayoutStyle>
          {photoBoard.length > 0 ? (
            <ul>
              <IndexPhotoList photoBoard={photoBoard} />
            </ul>
          ) : (
            <ListEmpty />
          )}
        </ContentListLayoutStyle>
      </BoxStyle>
    </CtnBox>
  );
}
