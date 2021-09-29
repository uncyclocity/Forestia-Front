import { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useReducerState } from '../../src/common/context';
import BtnPostingBack from '../Atoms/Button/BtnPostingBack';
import BtnPostingMore from '../Atoms/Button/BtnPostingMore';
import BoardTitleBoardInfo from '../MoleCules/BoardTitleBoardInfo';
import BoardTitleMoreMenu from '../MoleCules/BoardTitleMoreMenu';

const LeftBtnStyle = styled.div`
  position: relative;
`;

const RightBtnStyle = styled.div`
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
  const dispatch = useDispatch();
  const state = useReducerState();
  const isPostPage = state.isPostPage;
  const user = state.userName;
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenMoreAnimation, setisOpenMoreAnimation] = useState(false);

  return (
    <>
      <LeftBtnStyle>
        {backURL && (
          <BtnPostingBack
            onClick={() => unmountAnimation(0, dispatch, backURL)}
          />
        )}
      </LeftBtnStyle>
      <BoardTitleBoardInfo>{children}</BoardTitleBoardInfo>
      <RightBtnStyle isOpenMoreAnimation={isOpenMoreAnimation}>
        {isPostPage && user === '백괴' && (
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
