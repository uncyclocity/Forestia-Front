import { useEffect, useRef, useState } from 'react';
import {
  AiOutlineCamera,
  AiOutlineCloud,
  AiOutlineSmile,
} from 'react-icons/ai';
import {
  mountAnimation,
  unmountAnimation,
} from '../../src/common/animationController';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../src/common/context';
import Box from '../../src/boxEle/box';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../../src/boxEle/boxAnimation';
import { getPosting } from '../../src/doApi/doApi';
import { BiChevronRight } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { FiImage } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';

const setTop3 = (board, bak, i = 0) => {
  bak.current = [];
  if (board) {
    if (board.length >= 3) {
      for (i = 0; i < 3; i++) {
        bak.current = bak.current.concat(board[i]);
      }
    } else if (board.length < 3) {
      for (i = 0; i < board.length; i++) {
        bak.current = bak.current.concat(board[i]);
      }
    }
  }
  return bak.current;
};

const BoxLayoutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .margin_space {
    width: 30px;
  }

  .maxwidth {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 700px;
  }
`;

const BoxStyle1F = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 165px;
`;

const BoxStyle2F = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 240px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;

  .profile_photo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 165px;
    color: white;
    background: #20c997;
    border-radius: 25px 0 0 25px;
    font-size: 70px;
  }

  .profile_name_area {
    width: 50%;
    height: 165px;
    font-size: 20px;
    color: #828c99;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .profile_name_line {
      display: flex;
      flex-direction: row;
      .profile_name {
        color: #20c997;
      }
    }

    .profile_logout {
      border: 1px solid #20c997;
      color: #20c997;
      border-radius: 5px;
      font-size: 12px;
      margin-top: 10px;
      padding: 5px;
    }
  }
`;

const FreeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #828c99;
  float: left;

  .board_title {
    width: 100%;
    color: #20c997;
    padding: 15px;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 20px;

    .board_icon {
      height: 30px;
      font-size: 30px;
    }

    .board_name {
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
      width: 100%;
    }

    .goto_board {
      cursor: pointer;
      height: 20px;
      margin-left: 5px;
    }
  }

  .content_list {
    width: 100%;
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

          .posting_isImageExist {
            color: #20c997;
          }

          .posting_name {
            width: 90%;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .comment_amount_area {
            display: flex;
            flex-direction: row;
            color: #20c997;
            height: 14px;
            overflow: hidden;

            .amount {
              font-size: 12px;
            }
          }
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
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 20px 0;
      color: #babfc7;

      .empty_icon {
        width: 60px;
        height: 60px;
        font-size: 60px;
      }

      .empty_text {
        margin-top: 5px;
        font-size: 18px;
      }
    }
  }
`;

const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #525252;
  float: left;

  .board_title {
    width: 100%;
    color: #20c997;
    padding: 15px;
    display: flex;
    align-items: center;

    font-size: 20px;

    .board_icon {
      height: 30px;
      font-size: 30px;
    }

    .board_name {
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
      width: 100%;
    }

    .goto_board {
      cursor: pointer;
      height: 20px;
      margin-left: 5px;
    }
  }

  .content_list {
    width: 100%;
    ul {
      padding: 0px;
      margin: 5px 20px;
      li {
        float: left;
        list-style-type: none;

        .photo_posting {
          cursor: pointer;
          .posting_thumbnail {
            display: flex;
            justify-content: center;
            border: 1px solid #e9ecef;
            border-radius: 5px;
            width: 213px;
            height: 120px;
            overflow: hidden;
            background: #f4f4f4;

            img {
              max-width: initial;
              height: 120px;
            }
          }

          .name_and_content {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 10px 0 0 2px;
            width: 100%;

            .posting_name {
              width: 100%;
            }

            .comment_amount_area {
              display: flex;
              flex-direction: row;
              color: #20c997;

              .icon {
                font-size: 12px;
                margin-right: 5px;
              }

              .amount {
                font-size: 12px;
              }
            }
          }
        }

        a {
          display: block;
          overflow: hidden;
          cursor: pointer;
          text-overflow: ellipsis;
          white-space: nowrap;
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

      .empty_icon {
        width: 60px;
        height: 60px;
        font-size: 60px;
      }

      .empty_text {
        margin: 0 5px;
        font-size: 19px;
      }
    }
  }
`;

export default function Home({ freeBoard, photoBoard }) {
  const state = useReducerState();
  const dispatch = useDispatch();

  const animation = state.animation;
  const userName = state.userName;

  const bak = useRef([]);

  const [freeTop3] = useState(setTop3(freeBoard, bak));
  const [photoTop3] = useState(setTop3(photoBoard, bak));

  useEffect(() => {
    mountAnimation(dispatch, 'home');
  }, [dispatch]);

  return (
    <BoxLayoutStyle>
      <div className="maxwidth">
        <BoxAnimation
          animation={animation}
          sw1={box_slide_up}
          sw2={box_empty}
          sw3={box_slide_down}
          sw4={box_zero_opacity}
        >
          <Box>
            <BoxStyle1F>
              <ProfileBox>
                <div className="profile_photo">
                  <BsPerson />
                </div>
                <div className="profile_name_area">
                  <div className="profile_name_line">
                    <div className="profile_name">{userName}</div>님
                  </div>
                  <div className="profile_logout">로그아웃</div>
                </div>
              </ProfileBox>
            </BoxStyle1F>
          </Box>
        </BoxAnimation>

        <div className="margin_space" />

        <BoxAnimation
          animation={animation}
          sw1={box_slide_up}
          sw2={box_empty}
          sw3={box_slide_down}
          sw4={box_zero_opacity}
        >
          <Box>
            <BoxStyle1F>
              <FreeBox>
                <div className="board_title">
                  <div className="board_icon">
                    <AiOutlineCloud />
                  </div>
                  <div className="board_name">자게</div>
                  <div
                    className="goto_board"
                    onClick={() =>
                      unmountAnimation(
                        0,
                        dispatch,
                        `/board/board_list/free?page=1`,
                      )
                    }
                  >
                    <BiChevronRight />
                  </div>
                </div>

                <div className="content_list">
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
                              <div className="posting_isImageExist">
                                {post.imagesUrl.length > 0 ? (
                                  <FiImage />
                                ) : (
                                  <CgFileDocument />
                                )}
                              </div>
                              <div className="posting_name">{post.title}</div>
                              <div className="comment_amount_area">
                                <div className="amount">
                                  {post.comments.length}
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div className="list_empty">
                      <div className="empty_icon">
                        <AiOutlineSmile />
                      </div>
                      <div className="empty_text">
                        아직 게시판이 비어 있어요
                      </div>
                    </div>
                  )}
                </div>
              </FreeBox>
            </BoxStyle1F>
          </Box>
        </BoxAnimation>
      </div>

      <BoxAnimation
        animation={animation}
        sw1={box_slide_up}
        sw2={box_empty}
        sw3={box_slide_down}
        sw4={box_zero_opacity}
      >
        <Box>
          <BoxStyle2F>
            <PhotoBox>
              <div className="board_title">
                <div className="board_icon">
                  <AiOutlineCamera />
                </div>
                <div className="board_name">짤게</div>
                <div
                  className="goto_board"
                  onClick={() =>
                    unmountAnimation(
                      0,
                      dispatch,
                      `/board/board_list/photo?page=1`,
                    )
                  }
                >
                  <BiChevronRight />
                </div>
              </div>
              <div className="content_list">
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
                              <div className="posting_thumbnail">
                                <img
                                  src={post.imagesUrl[0]}
                                  alt={index}
                                  height="44"
                                />
                              </div>
                              <div className="name_and_content">
                                <div className="posting_name">{post.title}</div>
                                <div className="comment_amount_area">
                                  <div className="icon">
                                    <FaRegCommentAlt />
                                  </div>
                                  <div className="amount">
                                    {post.comments.length}
                                  </div>
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
                    <div className="empty_icon">
                      <AiOutlineSmile />
                    </div>
                    <div className="empty_text">
                      <div className="line">아직 게시판이</div>
                      <div className="line">비어 있어요</div>
                    </div>
                  </div>
                )}
              </div>
            </PhotoBox>
          </BoxStyle2F>
        </Box>
      </BoxAnimation>
    </BoxLayoutStyle>
  );
}

Home.getInitialProps = async () => {
  const freeBoard = await getPosting.doGetTop3('free');
  const photoBoard = await getPosting.doGetTop3('photo');
  return { freeBoard, photoBoard };
};
