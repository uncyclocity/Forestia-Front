import { AiOutlineSmile } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { unmountAnimation } from '../../../common/animationController';
import { useDispatch, useReducerState } from '../../../common/context';

export default function FreeListPostingList({ page, freeBoard }) {
  const dispatch = useDispatch();

  const startIndex = (page - 1) * 15;
  const endIndex = startIndex + 14;

  const thisPageList = freeBoard.reverse().slice(startIndex, endIndex);

  return (
    <div className="content_list">
      {thisPageList.length > 0 ? (
        <ul>
          {thisPageList.map((posting, index) => {
            return (
              <li key={index}>
                <div
                  onClick={() =>
                    unmountAnimation(
                      0,
                      dispatch,
                      `/board/posting?board_type=free&post_id=${posting.id}`,
                    )
                  }
                >
                  <a>
                    {posting.title}&nbsp;
                    <div className="comment_amount">
                      <div className="comment_icon">
                        <FaRegCommentAlt />
                      </div>
                      <div className="amount">{posting.comments.length}</div>
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
  );
}
