import { AiOutlineCamera } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useDispatch, useReducerState } from '../_context';
import Board_title from '../../styles/board_title';
import { useEffect } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../fixed/AnimationController';
import St_comuin from '../../styles/pages/board/St_comuin';

export default function Comuin() {
  const dispatch = useDispatch();
  const photoBoard = useReducerState().photoBoard;

  useEffect(() => {
    mountAnimation(dispatch, 'comuin');
  }, [dispatch]);

  return (
    <St_comuin>
      <Board_title>
        <div className="icon">
          <AiOutlineCamera />
        </div>
        <div className="title_name">짤게</div>
      </Board_title>
      <div className="content_list">
        <ul>
          {photoBoard &&
            photoBoard.map((post, index) => {
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
                    <a>
                      {post.title}&nbsp;
                      <div className="comment_amount">
                        <div className="comment_icon">
                          <FaRegCommentAlt />
                        </div>
                        <div className="amount">{post.comments.length}</div>
                      </div>
                    </a>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </St_comuin>
  );
}
