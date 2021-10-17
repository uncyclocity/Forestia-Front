import styled from 'styled-components';
import ImgThumbnail from '../Atoms/Image/ImgThumbnail';
import TxtCommentAmount4List from '../Atoms/Text/TxtCommentAmount4List';
import TxtPostingTitle from '../Atoms/Text/TxtPostingTitle';
import HomePhotoPostingButton from './HomePhotoPostingButton';
import Router from 'next/router';

const Styles = styled.div`
  ul {
    padding: 0 20px;
    margin: 0px;

    li {
      list-style-type: none;
      max-width: 200px;

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

export default function HomePhotoList({ photoBoard }) {
  const { NEXT_PUBLIC_IMAGE_URL } = process.env;

  return (
    <Styles>
      <ul>
        {photoBoard.map((posting, index) => {
          return (
            <li key={index}>
              <HomePhotoPostingButton
                onClick={() =>
                  Router.push(
                    `/board/posting?board_type=photo&post_id=${posting.id}`,
                  )
                }
              >
                <ImgThumbnail
                  imageUrl={NEXT_PUBLIC_IMAGE_URL + posting.imagesUrl[0]}
                />
                <div className="name_and_content">
                  <TxtPostingTitle title={posting.title} />
                  <div className="comment_amount">
                    <TxtCommentAmount4List amount={posting.comments.length} />
                  </div>
                </div>
              </HomePhotoPostingButton>
            </li>
          );
        })}
      </ul>
    </Styles>
  );
}
