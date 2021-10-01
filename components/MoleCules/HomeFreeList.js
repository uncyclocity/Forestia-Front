import styled from 'styled-components';
import { unmountAnimation } from '../../src/common/animationController';
import { useDispatch } from '../../src/common/context';
import IcoExistImg from '../Atoms/Icon/IcoExistImg';
import TxtCommentAmount4List from '../Atoms/Text/TxtCommentAmount4List';
import TxtPostingTitle from '../Atoms/Text/TxtPostingTitle';
import HomeFreePostingButton from './HomeFreePostingButton';

const isImgExist = (imagesUrlArr) => {
  if (imagesUrlArr.length > 0) return true;
  else return false;
};

const Styles = styled.div`
  ul {
    padding: 0 20px;
    margin: 0px;

    li {
      width: 300px;
      list-style-type: none;

      &:not(:first-child) {
        margin-top: 10px;
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

export default function HomeFreeList({ freeBoard }) {
  const dispatch = useDispatch();

  return (
    <Styles>
      <ul>
        {freeBoard.map((posting, index) => {
          return (
            <li key={index}>
              <HomeFreePostingButton
                onClick={() =>
                  unmountAnimation(
                    0,
                    dispatch,
                    `/board/posting?board_type=free&post_id=${posting.id}`,
                  )
                }
              >
                <TxtPostingTitle title={posting.title} />
                <IcoExistImg isImgExist={isImgExist(posting.imagesUrl)} />
                <div className="comment_amount">
                  <TxtCommentAmount4List amount={posting.imagesUrl.length} />
                </div>
              </HomeFreePostingButton>
            </li>
          );
        })}
      </ul>
    </Styles>
  );
}
