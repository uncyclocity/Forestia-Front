import Router from 'next/router';
import styled from 'styled-components';
import ListEmpty from '../MoleCules/ListEmpty';
import PhotoListPostingBtn from '../MoleCules/PhotoListPostingBtn';

const LayoutStyle = styled.div`
  margin: 0 auto;
  margin: 15px 0 10px 0;
`;

const ListStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;

export default function PhotoListPostingList({ photoBoard, page }) {
  return (
    <LayoutStyle>
      {photoBoard.length > 0 ? (
        <ListStyle>
          {photoBoard.map((posting, index) => (
            <PhotoListPostingBtn
              key={index}
              posting={posting}
              onClick={() =>
                Router.push(
                  `/board/posting?boardtype=photo&postid=${posting.id}&page=${page}`,
                )
              }
            />
          ))}
        </ListStyle>
      ) : (
        <ListEmpty />
      )}
    </LayoutStyle>
  );
}
