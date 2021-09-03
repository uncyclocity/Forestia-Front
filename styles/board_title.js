import styled, { css } from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';
import { unmountAnimation } from '../src/animationController';
import { useDispatch, useReducerState } from '../src/_context';
import { useState } from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { slideLeft, slideRight } from './keyframes/slide';
import { spin_90, spin_90_r } from './keyframes/spin';

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
    cursor: pointer;
    width: 35px;
    font-size: 30px;

    .more_icon {
      width: 30px;
      height: 30px;

      ${({ isOMAnimation }) =>
        isOMAnimation
          ? css`
              animation: ${spin_90} 0.25s ease 0s 1 normal forwards;
            `
          : css`
              animation: ${spin_90_r} 0.25s ease 0s 1 normal forwards;
            `}
    }

    .more {
      cursor: default;
      position: absolute;
      height: 68px;
      top: -50px;
      left: 70px;

      .ctxmenu {
        ${({ isOMAnimation }) =>
          isOMAnimation
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
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 10px;
            background: #20c997;
            color: white;
            box-shadow: 0 0 5px #dedede;
            list-style-type: none;

            padding: 5px;

            &:not(:last-child) {
              margin-bottom: 8px;
            }

            .ctx_icon {
              position: relative;
              top: 2px;

              font-size: 20px;
            }

            .ctx_text {
              margin-left: 3px;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;

export default function Board_title({ backURL, nowPostingEleObj, children }) {
  const dispatch = useDispatch();
  const state = useReducerState();

  const isPostPage = state.isPostPage;
  const user = state.userName;

  const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOMAnimation, setIsOMAnimation] = useState(false);

  return (
    <Styles isOMAnimation={isOMAnimation}>
      <div
        className="lr_btn"
        onClick={() => unmountAnimation(0, dispatch, backURL)}
      >
        <IoIosArrowBack />
      </div>
      <div className="board_info">{children}</div>
      <div className="lr_btn">
        {isPostPage && user === '백괴' && (
          <div
            className="more_icon"
            onClick={() => {
              if (isOMAnimation) {
                setTimeout(() => {
                  setIsOpenMore(!isOpenMore);
                }, 250);
              } else {
                setIsOpenMore(!isOpenMore);
              }
              setIsOMAnimation(!isOMAnimation);
            }}
          >
            <FiMoreHorizontal />
          </div>
        )}
        <div className="more">
          {isOpenMore && (
            <div className="ctxmenu">
              <ul>
                <li
                  onClick={() => {
                    dispatch({ type: 'editpost_data', nowPostingEleObj });
                    unmountAnimation(
                      0,
                      dispatch,
                      `/board/update_posting/editing`,
                    );
                  }}
                >
                  <div className="ctx_icon">
                    <FiEdit />
                  </div>
                  <div className="ctx_text">수정</div>
                </li>
                <li
                  onClick={() => {
                    if (confirm('정말로 삭제하시겠습니까')) {
                      dispatch({ type: 'editpost_data', nowPostingEleObj });
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/update_posting/deleting`,
                      );
                    }
                  }}
                >
                  <div className="ctx_icon">
                    <RiDeleteBin7Line />
                  </div>
                  <div className="ctx_text">삭제</div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Styles>
  );
}
