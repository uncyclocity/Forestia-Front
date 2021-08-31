import { useEffect, useRef, useState } from 'react';
import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import {
  mountAnimation,
  unmountAnimation,
} from '../../src/animationController';
import St_fixedHome from '../../styles/fixed/St_fixedHome';
import { useDispatch, useReducerState } from '../../src/_context';

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

export default function FixedHome() {
  const state = useReducerState();
  const dispatch = useDispatch();

  const freeBoard = state.freeBoard;
  const photoBoard = state.photoBoard;

  const bak = useRef([]);

  const [freeTop3] = useState(setTop3(freeBoard, bak));
  const [photoTop3] = useState(setTop3(photoBoard, bak));

  useEffect(() => {
    mountAnimation(dispatch, 'home');
  }, [dispatch]);

  return (
    <St_fixedHome>
      <div className="content">
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
      </div>
      <div className="content">
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
      </div>
    </St_fixedHome>
  );
}
