import { useEffect, useRef, useState } from 'react';
import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
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
import instance from '../../src/common/instance';

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

const BoxStyle = styled.div`
  height: 200px;
`;

const BoardTop3Block = styled.div`
  width: 350px;
  padding: 5px 30px;
  color: #525252;
  float: left;

  .board_title {
    color: #20c997;
    font-weight: bold;
    border-bottom: 1px solid #e9ecef;

    margin-top: 15px;
    display: flex;
    flex-direction: row;
    font-size: 20px;

    .board_icon {
      font-size: 30px;
      transform: translateY(-7%);
    }
  }

  .content_list {
    li {
      width: 300px;
      list-style-type: none;
      transform: translateX(-13.5%);

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
    <BoxAnimation
      animation={animation}
      sw1={box_slide_up}
      sw2={box_empty}
      sw3={box_slide_down}
      sw4={box_zero_opacity}
    >
      <Box>
        <BoxStyle>
          <BoardTop3Block>
            <div className="board_title">
              <div className="board_icon">
                <AiOutlineCloud />
              </div>
              &nbsp;자게
            </div>

            <div className="content_list">
              <ul>
                {freeTop3 &&
                  freeTop3.map((post, index) => {
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
            </div>
          </BoardTop3Block>
          <BoardTop3Block>
            <div className="board_title">
              <div className="board_icon">
                <AiOutlineCamera />
              </div>
              &nbsp;짤게
            </div>
            <div className="content_list">
              <ul>
                {photoTop3 &&
                  photoTop3.map((post, index) => {
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
                          <a>{post.title}</a>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </BoardTop3Block>
        </BoxStyle>
      </Box>
    </BoxAnimation>
  );
}

Home.getInitialProps = async () => {
  const free_res = await instance.get(
    '/api/get_posting/getPostingsTop3?board_type=free',
  );
  const freeBoard = await free_res.data;
  const photo_res = await instance.get(
    '/api/get_posting/getPostingsTop3?board_type=photo',
  );
  const photoBoard = await photo_res.data;
  return { freeBoard, photoBoard };
};
