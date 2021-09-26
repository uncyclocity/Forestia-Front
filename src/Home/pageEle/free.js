import { useRef, useState } from 'react';
import { unmountAnimation } from '../../common/animationController';
import { useDispatch } from '../../common/context';
import setTop3 from '../etcFunc/setTop3';
import styled from 'styled-components';
import BtnGotoBoard4Home from '../../../components/Atoms/Button/BtnGotoBoard4Home';
import TxtPostingTitle from '../../../components/Atoms/Text/TxtPostingTitle';
import isImgExist from '../etcFunc/isImgExist';
import TxtCommentAmount4List from '../../../components/Atoms/Text/TxtCommentAmount4List';
import IcoComment from '../../../components/Atoms/Icon/IcoComment';
import TxtBoard4Home from '../../../components/Atoms/Text/TxtBoard4Home';
import IcoBoard4Home from '../../../components/Atoms/Icon/IcoBoard4Home';
import IcoExistImg from '../../../components/Atoms/Icon/IcoExistImg';
import IcoListEmpty from '../../../components/Atoms/Icon/IcoListEmpty';
import TxtListEmpty from '../../../components/Atoms/Text/TxtListEmpty';

const BoardTitleLayoutStyle = styled.div`
  width: 100%;
  color: #20c997;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
`;

const FreeBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #828c99;
  float: left;
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

export default function FreeBox({ freeBoard }) {
  const dispatch = useDispatch();
  const bak = useRef([]);
  const [freeTop3] = useState(setTop3(freeBoard, bak));
  const freeListUrl = `/board/board_list/free?page=1`;

  return (
    <FreeBoxStyle>
      <BoardTitleLayoutStyle>
        <IcoBoard4Home boardName="free" />
        <TxtBoard4Home boardName="free" />
        <div onClick={() => unmountAnimation(0, dispatch, freeListUrl)}>
          <BtnGotoBoard4Home />
        </div>
      </BoardTitleLayoutStyle>

      <ContentListLayoutStyle>
        {freeTop3.length > 0 ? (
          <ul>
            {freeTop3.map((posting, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/posting?board_type=free&post_id=${posting.id}`,
                      )
                    }
                    className="posting_btn"
                  >
                    <TxtPostingTitle title={posting.title} />
                    <IcoExistImg isImgExist={isImgExist(posting.imagesUrl)} />
                    <div className="comment_amount">
                      <IcoComment />
                      <TxtCommentAmount4List
                        amount={posting.imagesUrl.length}
                      />
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
