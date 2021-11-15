import Router from 'next/router';
import styled from 'styled-components';
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

      @media screen and (max-width: 700px) {
        width: 100%;
      }

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
  return (
    <Styles>
      <ul>
        {freeBoard.map((posting, index) => {
          return (
            <li key={index}>
              <HomeFreePostingButton
                onClick={() =>
                  Router.push(
                    `/board/posting?board_type=free&post_id=${posting.id}`,
                  )
                }
              >
                <TxtPostingTitle title={posting.title} />
                <IcoExistImg isImgExist={isImgExist(posting.imagesUrl)} />
                <div className="comment_amount">
                  <TxtCommentAmount4List amount={posting.comments.length} />
                </div>
              </HomeFreePostingButton>
            </li>
          );
        })}
      </ul>
    </Styles>
  );
}
