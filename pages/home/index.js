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
  height: 220px;
`;

const BoxStyle2F = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 230px;
`;

const FreeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #525252;
  float: left;

  .board_title {
    width: 100%;
    color: #20c997;
    padding: 20px;
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
    }

    .goto_board {
      height: 20px;
      margin-left: 5px;
    }
  }

  .content_list {
    width: 100%;
    ul {
      padding: 0 20px;
      li {
        width: 300px;
        list-style-type: none;

        a {
          display: block;
          overflow: hidden;
          cursor: pointer;
          text-overflow: ellipsis;
          white-space: nowrap;
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
          color: #525252;
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
    padding: 20px;
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
    }

    .goto_board {
      height: 20px;
      margin-left: 5px;
    }
  }

  .content_list {
    width: 100%;
    ul {
      padding: 0 20px;
      li {
        float: left;
        list-style-type: none;

        .photo_posting {
          .posting_thumbnail {
            border: 1px solid #e9ecef;
            border-radius: 5px;
            max-width: 210px;
            height: 100px;
            overflow: hidden;
            img {
              max-width: initial;
              height: 100px;
              margin-left: -28%;
            }
          }

          .posting_name {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
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
          color: #525252;
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
            <BoxStyle1F></BoxStyle1F>
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
                  <div className="goto_board">
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
                            >
                              <a>{post.title}</a>
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
                <div className="goto_board">
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
                              <div className="posting_name">{post.title}</div>
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
