import styled from 'styled-components';
import { doPosting, getPosting } from '../../src/doApi';
import CtnBox from '../Atoms/Container/CtnBox';
import HomeBorderTitle from '../MoleCules/HomeBorderTitle';
import HomePhotoList from '../MoleCules/HomePhotoList';
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
  height: 173px;

  @media screen and (max-width: 700px) {
    height: 120px;
  }

  ul {
    padding: 0px;
  }
`;

export default function HomePhotoBox({ photoBoard }) {
  const boardName = 'photo';
  const listUrl = '/board/board_list/photo?page=1';

  return (
    <CtnBox>
      <BoxStyle>
        <HomeBorderTitle boardName={boardName} listUrl={listUrl} />
        <ContentListLayoutStyle>
          {photoBoard.length > 0 ? (
            <ul>
              <HomePhotoList photoBoard={photoBoard} />
            </ul>
          ) : (
            <ListEmpty />
          )}
        </ContentListLayoutStyle>
      </BoxStyle>
    </CtnBox>
  );
}

HomePhotoBox.getInitialProps = async () => {
  const photoBoard = await doPosting.get.top3('photo');
  return { photoBoard };
};
