import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../../src/_context';
import { useEffect, useState } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../../src/animationController';
import St_post from '../../../styles/pages/board/St_post';
import { FiSend } from 'react-icons/fi';
import {
  postPageSwitchOff,
  postPageSwitchOn,
} from '../../../src/posting/postpageSwitching';
import { comm } from '../../../src/posting/doApi';
import getPostingEleState from '../../../src/posting/getPostingEleState';
import UpAndDown from '../../../src/posting/upAndDown';
import InBoardTitle from '../../../src/posting/inBoardTitle';
import CommentInput from '../../../src/posting/commentInput';

export default function Post() {
  const state = useReducerState();
  const router = useRouter();
  const dispatch = useDispatch();

  const [editCommObj, setEditCommObj] = useState(false);

  const { board_type, post_id } = router.query;
  const userName = state.userName;

  const nowPostingEleObj = getPostingEleState(state, board_type, post_id);

  useEffect(() => {
    mountAnimation(dispatch, board_type);
    postPageSwitchOn(dispatch);
    return () => {
      postPageSwitchOff(dispatch);
    };
  }, [board_type, dispatch]);

  const doDeleteComment = (comment_id) => {
    if (confirm('정말로 삭제하시겠습니까')) {
      setEditCommObj(false);
      unmountAnimation(
        0,
        dispatch,
        `/board/update_comment/commDeleting?boardType=${board_type}&post_id=${post_id}&comment_id=${comment_id}`,
      );
    }
  };

  return (
    <St_post>
      <Board_title
        backURL={`/board/board_list/${board_type}`}
        nowPostingEleObj={nowPostingEleObj}
      >
        <InBoardTitle nowPostingEleObj={nowPostingEleObj} />
      </Board_title>
      <div className="post_content">{nowPostingEleObj.content}</div>
      <UpAndDown nowPostingEleObj={nowPostingEleObj} />
      <div className="comment_list">
        <div className="comment_amount">
          <div>댓글</div>
          <div className="amount">{nowPostingEleObj.comments.length}</div>
        </div>
        <ul>
          {nowPostingEleObj.comments.map((comment, index) => {
            return (
              <li key={index}>
                <div className="comment_author_and_date">
                  <div className="cand_author">{comment.author}</div>
                  <div className="cand_date">{comment.date}</div>
                  {userName === '백괴' && (
                    <>
                      {editCommObj.id === comment.id ? (
                        <div
                          className="cand_edit_und_del"
                          onClick={() => setEditCommObj(false)}
                        >
                          수정취소
                        </div>
                      ) : (
                        <div
                          className="cand_edit_und_del"
                          onClick={() =>
                            setEditCommObj({
                              id: comment.id,
                              content: comment.content,
                            })
                          }
                        >
                          수정
                        </div>
                      )}

                      <div
                        className="cand_edit_und_del"
                        onClick={() => doDeleteComment(comment.id)}
                      >
                        삭제
                      </div>
                    </>
                  )}
                </div>
                <div className="comment_content">
                  {editCommObj.id === comment.id ? (
                    <div className="comm_edit_area">
                      <textarea
                        style={{ resize: 'none' }}
                        value={editCommObj.content}
                        onChange={(e) =>
                          setEditCommObj({
                            ...editCommObj,
                            content: e.target.value,
                          })
                        }
                        className="comm_edit_input_box"
                      />
                      <div
                        className="comm_edit_post_btn"
                        onClick={() =>
                          comm.doEditComment(
                            board_type,
                            post_id,
                            editCommObj,
                            setEditCommObj,
                            dispatch,
                          )
                        }
                      >
                        <FiSend />
                      </div>
                    </div>
                  ) : (
                    <a>{comment.content}</a>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <CommentInput nowPostingEleObj={nowPostingEleObj} />
    </St_post>
  );
}
