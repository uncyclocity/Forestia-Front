import styled from 'styled-components';
import { unmountAnimation } from '../../src/common/animationController';
import { useDispatch } from '../../src/common/context';
import ImgThumbnail from '../Atoms/Image/ImgThumbnail';
import TxtCommentAmount4List from '../Atoms/Text/TxtCommentAmount4List';
import TxtPostingTitle from '../Atoms/Text/TxtPostingTitle';
import HomePhotoPostingButton from './HomePhotoPostingButton';

const Styles = styled.div`
  ul {
    padding: 0 20px;
    margin: 0px;

    li {
      list-style-type: none;

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
  const dispatch = useDispatch();

  return (
    <Styles>
      <ul>
        {photoBoard.map((posting, index) => {
          return (
            <li key={index}>
              <HomePhotoPostingButton
                onClick={() =>
                  unmountAnimation(
                    0,
                    dispatch,
                    `/board/posting?board_type=photo&post_id=${posting.id}`,
                  )
                }
              >
                <ImgThumbnail imageUrl={posting.imagesUrl[0]} />
                <div className="name_and_content">
                  <TxtPostingTitle title={posting.title} />
                  <div className="comment_amount">
                    <TxtCommentAmount4List amount={posting.imagesUrl.length} />
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
