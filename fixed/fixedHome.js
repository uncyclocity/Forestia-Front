import Title from './title';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../pages/_context';
import { useRef, useState } from 'react';
import { unmountAnimation } from './AnimationController';
import St_fixedHome from '../styles/fixed/St_fixedHome';

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

  return (
    <St_fixedHome>
      <Title />
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
                          `/board/post?board=free&post_id=${post.id}`,
                          `/board/free/${post.id}`,
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
                          `/board/post/?board=photo&post_id=${post.id}`,
                          `/board/photo/${post.id}`,
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
