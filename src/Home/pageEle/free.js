import { useRef, useState } from 'react';
import { AiOutlineSmile } from 'react-icons/ai';
import { unmountAnimation } from '../../common/animationController';
import { useDispatch } from '../../common/context';
import setTop3 from '../etcFunc/setTop3';
import styled from 'styled-components';
import BtnGotoBoard4Home from '../../../components/Atoms/BtnGotoBoard4Home';
import TxtPostingTitle from '../../../components/Atoms/TxtPostingTitle';
import isImgExist from '../etcFunc/isImgExist';
import TxtCommentAmount from '../../../components/Atoms/TxtCommentAmount';
import IcoComment from '../../../components/Atoms/IcoComment';
import TxtBoard from '../../../components/Atoms/TxtBoard';
import IcoBoard from '../../../components/Atoms/IcoBoard';
import IcoExistImg from '../../../components/Atoms/IcoExistImg';
import IcoListEmpty from '../../../components/Atoms/IcoListEmpty';
import TxtListEmpty from '../../../components/Atoms/TxtListEmpty';

const BoardTitleLayoutStyle = styled.div`
  width: 100%;
  color: #20c997;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
`;

const ContentListLayoutStyle = styled.div`
  width: 100%;
  height: 105px;
  ul {
    padding: 5px 20px;
    margin: 0px;

    li {
      width: 300px;
      list-style-type: none;

      .posting_btn {
        cursor: pointer;
        display: flex;
        flex-direction: row;
      }

      .comment_amount {
        display: flex;
        flex-direction: row;
        color: #20c997;
        height: 14px;
        margin-left: auto;
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

  .list_empty {
    height: 100%;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    color: #babfc7;
  }
`;

const FreeBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #828c99;
  float: left;
`;

export default function FreeBox({ freeBoard }) {
  const dispatch = useDispatch();
  const bak = useRef([]);
  const [freeTop3] = useState(setTop3(freeBoard, bak));
  const freeListUrl = `/board/board_list/free?page=1`;

  return (
    <FreeBoxStyle>
      <BoardTitleLayoutStyle>
        <IcoBoard boardName="free" />
        <TxtBoard boardName="free" />
        <div onClick={() => unmountAnimation(0, dispatch, freeListUrl)}>
          <BtnGotoBoard4Home />
        </div>
      </BoardTitleLayoutStyle>

      <ContentListLayoutStyle>
        {freeTop3.length > 0 ? (
          <ul>
            {freeTop3.map((post, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/posting?board_type=free&post_id=${post.id}`,
                      )
                    }
                    className="posting_btn"
                  >
                    <TxtPostingTitle>{post.title}</TxtPostingTitle>
                    <IcoExistImg isImgExist={isImgExist(post.imagesUrl)} />
                    <div className="comment_amount">
                      <IcoComment />
                      <TxtCommentAmount>
                        {post.comments.length}
                      </TxtCommentAmount>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="list_empty">
            <IcoListEmpty />
            <TxtListEmpty />
          </div>
        )}
      </ContentListLayoutStyle>
    </FreeBoxStyle>
  );
}
