import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useReducerState } from '../../src/context';
import BtnPostingBack from '../Atoms/Button/BtnPostingBack';
import BtnPostingMore from '../Atoms/Button/BtnPostingMore';
import BoardTitleBoardInfo from '../MoleCules/BoardTitleBoardInfo';
import BoardTitleMoreMenu from '../MoleCules/BoardTitleMoreMenu';
import Router from 'next/router';

const LeftBtnStyle = styled.div`
  width: 30px;
`;

const RightBtnStyle = styled.div`
  width: 30px;
  position: relative;

  .more_icon {
    display: flex;
    justify-content: right;
    ${({ isOpenMoreAnimation }) =>
      isOpenMoreAnimation
        ? css`
            transition: transform 0.2s linear;
            transform: rotate(90deg);
          `
        : css`
            transition: transform 0.2s linear;
            transform: rotate(0deg);
          `}
  }
`;

export default function BoardTitleEles({ backURL, children }) {
  const state = useReducerState();
  const isPostPage = state.isPostPage;
  const userId = state.user.userId;
  const { authorId: nowPostingAuthorId } = state.nowPostingEleObj;
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenMoreAnimation, setisOpenMoreAnimation] = useState(false);

  return (
    <>
      <LeftBtnStyle>
        {backURL && <BtnPostingBack onClick={() => Router.push(backURL)} />}
      </LeftBtnStyle>
      <BoardTitleBoardInfo>{children}</BoardTitleBoardInfo>
      <RightBtnStyle isOpenMoreAnimation={isOpenMoreAnimation}>
        {isPostPage && userId === nowPostingAuthorId && (
          <div
            className="more_icon"
            onClick={() => {
              if (isOpenMoreAnimation) {
                setTimeout(() => {
                  setIsOpenMore(!isOpenMore);
                }, 250);
              } else {
                setIsOpenMore(!isOpenMore);
              }
              setisOpenMoreAnimation(!isOpenMoreAnimation);
            }}
          >
            <BtnPostingMore />
          </div>
        )}
        <div className="more">
          {isOpenMore && (
            <BoardTitleMoreMenu isOpenMoreAnimation={isOpenMoreAnimation} />
          )}
        </div>
      </RightBtnStyle>
    </>
  );
}
