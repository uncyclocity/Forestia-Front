import { useRef, useState } from 'react';
import { unmountAnimation } from '../../common/animationController';
import { useDispatch } from '../../common/context';
import setTop3 from '../etcFunc/setTop3';
import styled from 'styled-components';
import TxtPostingTitle from '../../../components/Atoms/Text/TxtPostingTitle';
import TxtCommentAmount4List from '../../../components/Atoms/Text/TxtCommentAmount4List';
import ImgThumbnail from '../../../components/Atoms/Image/ImgThumbnail';
import HomeBorderTitle from '../../../components/MoleCules/HomeBorderTitle';
import ListEmpty from '../../../components/MoleCules/ListEmpty';
import HomePhotoPostingButton from '../../../components/MoleCules/HomePhotoPostingButton';
import HomePhotoList from '../../../components/MoleCules/HomePhotoList';

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
  height: 150px;

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
`;

export default function PhotoBox({ photoBoard }) {
  const boardName = 'photo';
  const listUrl = '/board/board_list/photo?page=1';

  return (
    <PhotoBoxStyle>
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
    </PhotoBoxStyle>
  );
}
