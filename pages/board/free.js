import { AiOutlineCloud } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useDispatch, useReducerState } from '../_context';
import Board_title from '../../styles/board_title';
import { useEffect } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../fixed/AnimationController';
import St_free from '../../styles/pages/board/St_free';

export default function Free() {
  const dispatch = useDispatch();
  const freeBoard = useReducerState().freeBoard;

  useEffect(() => {
    mountAnimation(dispatch, 'free');
  }, [dispatch]);

  return (
    <St_free>
      <Board_title>
        <div className="icon">
          <AiOutlineCloud />
        </div>
        <div className="title_name">자게</div>
      </Board_title>
      <div className="content_list">
        <ul>
          {freeBoard &&
            freeBoard.map((post, index) => {
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
    </St_free>
  );
}
