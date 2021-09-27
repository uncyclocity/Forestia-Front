import styled from 'styled-components';
import { getPosting } from '../../src/doApi/doApi';
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

  width: 700px;
`;

const ContentListLayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110%;
  padding-bottom: 7px;

  ul {
    padding: 0px;
    margin: 5px 20px;

    li {
      float: left;
      list-style-type: none;

      .photo_posting {
        cursor: pointer;

        .name_and_content {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 10px;
          width: 100%;

          .comment_amount {
            display: flex;
            flex-direction: row;
            color: #20c997;
            margin-left: auto;
          }
        }
      }

      &:not(:first-child) {
        margin-left: 20px;
      }

      &:hover {
        transition: 0.15s all ease-in;
        color: #20c997;
      }

      &:not(:hover) {
        transition: 0.15s all ease-in;
        color: #828c99;
      }
    }
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
  const photoBoard = await getPosting.doGetTop3('photo');
  return { photoBoard };
};
