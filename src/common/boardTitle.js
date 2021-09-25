import styled, { css } from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { useDispatch, useReducerState } from './context';
import { useState } from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { slideLeft, slideRight } from '../../styles/keyframes/slide';
import { unmountAnimation } from './animationController';
import BtnPostingMore from '../../components/Atoms/BtnPostingMore';
import BtnPostingBack from '../../components/Atoms/BtnPostingBack';
import IcoMoreEditPosting from '../../components/Atoms/IcoMoreEditPosting';
import IcoMoreDeletePosting from '../../components/Atoms/IcoMoreDeletePosting';
import TxtMoreArea from '../../components/Atoms/TxtMoreArea';
import BtnMore from '../../components/Atoms/BtnMore';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  color: #20c997;

  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;

  .board_info {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .icon {
      font-size: 35px;
    }

    .title_name {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .lr_btn {
    position: relative;
    .more_icon {
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

    .more {
      cursor: default;
      position: absolute;
      height: 68px;
      top: -50px;
      left: 70px;

      .ctxmenu {
        ${({ isOpenMoreAnimation }) =>
          isOpenMoreAnimation
            ? css`
                animation: 0.25s ease 0s ${slideRight};
              `
            : css`
                animation: 0.25s ease 0s ${slideLeft};
              `}
        animation-fill-mode: forwards;
        width: 70px;
        ul {
          padding-left: 0;
          height: 100%;
          li {
            list-style-type: none;
            &:not(:last-child) {
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
`;

export default function BoardTitle({ backURL, nowPostingEleObj, children }) {
  const dispatch = useDispatch();
  const state = useReducerState();

  const isPostPage = state.isPostPage;
  const user = state.userName;
  const postCnt = state.postCnt;

  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenMoreAnimation, setisOpenMoreAnimation] = useState(false);

  return (
    <Styles isOpenMoreAnimation={isOpenMoreAnimation}>
      <div className="lr_btn">
        {backURL && (
          <BtnPostingBack
            onClick={() => unmountAnimation(0, dispatch, backURL)}
          />
        )}
      </div>
      <div className="board_info">{children}</div>
      <div className="lr_btn">
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
            <div className="ctxmenu">
              <ul>
                <li>
                  <BtnMore
                    onClick={() => {
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/update_posting/postingEditing`,
                      );
                    }}
                  >
                    <IcoMoreEditPosting />
                    <TxtMoreArea text="수정" />
                  </BtnMore>
                </li>
                <li>
                  <BtnMore
                    onClick={() => {
                      if (!postCnt && confirm('정말로 삭제하시겠습니까')) {
                        unmountAnimation(
                          0,
                          dispatch,
                          `/board/update_posting/postingDeleting`,
                        );
                      }
                    }}
                  >
                    <IcoMoreDeletePosting />
                    <TxtMoreArea text="삭제" />
                  </BtnMore>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Styles>
  );
}
