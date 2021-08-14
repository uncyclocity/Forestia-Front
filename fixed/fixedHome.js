import Title from './title';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../pages/_context';
import { useState } from 'react';
import { unmountAnimation } from './AnimationController';
import St_fixedHome from '../styles/fixed/St_fixedHome';

export default function FixedHome() {
  const state = useReducerState();
  const dispatch = useDispatch();

  const freeBoard = state.freeBoard;
  const photoBoard = state.photoBoard;

  const [freeTop3] = useState([freeBoard[0], freeBoard[1], freeBoard[2]]);
  const [photoTop3] = useState([photoBoard[0], photoBoard[1], photoBoard[2]]);

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
                          `/board/post/?board=comuin&post_id=${post.id}`,
                          `/board/comuin/${post.id}`,
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
