import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';
import { unmountAnimation } from '../fixed/AnimationController';
import { useDispatch, useReducerState } from '../pages/_context';
import { useState } from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import instance from '../pages/api/api';
import getData from '../fixed/getData';

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

    .author_and_date {
      display: flex;
      flex-direction: row;

      margin-top: 10px;

      .author {
        padding: 0 5px;
        font-weight: bold;
      }

      .date {
        display: flex;
        flex-direction: row;
        padding: 0 5px;

        .date_icon {
          transform: translateY(1px);
        }
      }
    }
  }

  .lr_btn {
    position: relative;
    cursor: pointer;
    width: 35px;
    font-size: 30px;
  }

  .more {
    cursor: default;
    position: absolute;
    height: 68px;
    top: -50px;
    left: 70px;

    .ctxmenu {
      width: 70px;
      ul {
        padding-left: 0;
        height: 100%;
        li {
          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 15px;
          background: #20c997;
          color: white;
          box-shadow: 0 0 20px #dedede;
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
`;

export default function Board_title({ backURL, editData, children }) {
  const dispatch = useDispatch();
  const state = useReducerState();

  const isPostPage = state.isPostPage;
  const user = state.user;

  const [isOpenMore, setIsOpenMore] = useState(false);

  return (
    <Styles>
      <div
        className="lr_btn"
        onClick={() => unmountAnimation(0, dispatch, backURL)}
      >
        <IoIosArrowBack />
      </div>
      <div className="board_info">{children}</div>
      <div className="lr_btn">
        {isPostPage && user === '백괴' && (
          <div onClick={() => setIsOpenMore(!isOpenMore)}>
            <FiMoreHorizontal />
          </div>
        )}
        <div className="more">
          {isOpenMore && (
            <div className="ctxmenu">
              <ul>
                <li
                  onClick={() => {
                    dispatch({ type: 'editpost_data', editData });
                    unmountAnimation(0, dispatch, `/board/editing`);
                  }}
                >
                  <div className="ctx_icon">
                    <FiEdit />
                  </div>
                  <div className="ctx_text">수정</div>
                </li>
                <li
                  onClick={() => {
                    unmountAnimation(
                      0,
                      dispatch,
                      `/board/${editData.boardType}`,
                    );
                    instance({
                      method: 'POST',
                      url: '/api/deletePost',
                      data: {
                        boardType: editData.boardType,
                        id: editData.id,
                      },
                    }).then(async () => {
                      await getData(dispatch);
                    });
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
