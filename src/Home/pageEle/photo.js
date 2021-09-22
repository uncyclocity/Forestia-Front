import { useRef, useState } from 'react';
import { unmountAnimation } from '../../common/animationController';
import { useDispatch } from '../../common/context';
import setTop3 from '../etcFunc/setTop3';
import styled from 'styled-components';
import IcoBoard4Home from '../../../components/Atoms/IcoBoard4Home';
import TxtBoard4Home from '../../../components/Atoms/TxtBoard4Home';
import BtnGotoBoard4Home from '../../../components/Atoms/BtnGotoBoard4Home';
import IcoListEmpty from '../../../components/Atoms/IcoListEmpty';
import TxtListEmpty from '../../../components/Atoms/TxtListEmpty';
import TxtPostingTitle from '../../../components/Atoms/TxtPostingTitle';
import TxtCommentAmount from '../../../components/Atoms/TxtCommentAmount';
import LblImgThumbnail from '../../../components/Atoms/LblImgThumbnail';

const BoardTitleLayoutStyle = styled.div`
  width: 100%;
  color: #20c997;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
`;

const PhotoBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #525252;
  float: left;
`;

const ContentListLayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;

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
        margin-left: 10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 20px 0;
    color: #babfc7;
  }
`;

export default function PhotoBox({ photoBoard }) {
  const dispatch = useDispatch();
  const bak = useRef([]);
  const [photoTop3] = useState(setTop3(photoBoard, bak));
  const photoListUrl = `/board/board_list/photo?page=1`;

  return (
    <PhotoBoxStyle>
      <BoardTitleLayoutStyle>
        <IcoBoard4Home boardName="photo" />
        <TxtBoard4Home boardName="photo" />
        <div onClick={() => unmountAnimation(0, dispatch, photoListUrl)}>
          <BtnGotoBoard4Home />
        </div>
      </BoardTitleLayoutStyle>

      <ContentListLayoutStyle>
        {photoTop3.length > 0 ? (
          <ul>
            {photoTop3.map((post, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/posting?board_type=photo&post_id=${post.id}`,
                      )
                    }
                  >
                    <div className="photo_posting">
                      <LblImgThumbnail imageUrl={post.imagesUrl[0]} />
                      <div className="name_and_content">
                        <TxtPostingTitle>{post.title}</TxtPostingTitle>
                        <div className="comment_amount">
                          <TxtCommentAmount>
                            {post.comments.length}
                          </TxtCommentAmount>
                        </div>
                      </div>
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
    </PhotoBoxStyle>
  );
}
