import { AiOutlineCamera, AiOutlineSmile } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import St_photo from '../../../styles/pages/board/St_photo';
import { useDispatch, useReducerState } from '../../../src/common/context';
import {
  mountAnimation,
  unmountAnimation,
} from '../../../src/common/animationController';

export default function Photo() {
  const dispatch = useDispatch();
  const photoBoard = useReducerState().photoBoard;

  useEffect(() => {
    mountAnimation(dispatch, 'photo');
  }, [dispatch]);

  return (
    <St_photo>
      <BoardTitle backURL="/home">
        <div className="icon">
          <AiOutlineCamera />
        </div>
        <div className="title_name">짤게</div>
      </BoardTitle>
      <div className="content_list">
        {photoBoard.length > 0 ? (
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
                          `/board/posting?board_type=photo&post_id=${post.id}`,
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
        ) : (
          <div className="list_empty">
            <div className="empty_icon">
              <AiOutlineSmile />
            </div>
            <div className="empty_text">아직 게시판이 비어 있어요</div>
          </div>
        )}
      </div>
    </St_photo>
  );
}
