import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../../src/_context';
import {
  AiOutlineCloud,
  AiOutlineCamera,
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';
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
import getEditPostingObj from '../../../src/posting/getEditPosting';
import getDoUpdateUDdata from '../../../src/posting/getDoUpdateUDdata';

export default function Post() {
  const state = useReducerState();
  const router = useRouter();
  const dispatch = useDispatch();

  const [editCommObj, setEditCommObj] = useState(false);
  const commentContent = useRef(null);
  const { board_type, post_id } = router.query;
  const userName = state.user;

  const nowPostingEleObj = getPostingEleState(state, board_type, post_id);
  const forEditObj = getEditPostingObj(board_type, nowPostingEleObj);

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
        editData={forEditObj}
      >
        <div className="icon">
          {board_type === 'free' && <AiOutlineCloud />}
          {board_type === 'photo' && <AiOutlineCamera />}
        </div>
        <div className="title_name">{nowPostingEleObj.title}</div>
        <div className="author_and_date">
          <div className="author">{nowPostingEleObj.author}</div>
          <div className="date">
            <div className="date_icon">
              <BiTime />
            </div>
            {nowPostingEleObj.date}
          </div>
        </div>
      </Board_title>
      <div className="post_content">{nowPostingEleObj.content}</div>
      <div className="up_and_down">
        <div
          className="ud_btn_area"
          onClick={() =>
            getDoUpdateUDdata(
              'up',
              'down',
              nowPostingEleObj.up.clicker,
              nowPostingEleObj.down.clicker,
              board_type,
              post_id,
              userName,
              dispatch,
              setEditCommObj,
            )
          }
        >
          <div className="icon">
            <div className="up">
              {nowPostingEleObj.up.clicker.find(
                (clickUser) => clickUser === userName,
              ) ? (
                <AiFillLike />
              ) : (
                <AiOutlineLike />
              )}
            </div>
          </div>
          <div className="amount">
            <div className="up">{nowPostingEleObj.up.amount}</div>
          </div>
        </div>
        <div
          className="ud_btn_area"
          onClick={() =>
            getDoUpdateUDdata(
              'down',
              'up',
              nowPostingEleObj.down.clicker,
              nowPostingEleObj.up.clicker,
              board_type,
              post_id,
              userName,
              dispatch,
              setEditCommObj,
            )
          }
        >
          <div className="icon">
            <div className="down">
              {nowPostingEleObj.down.clicker.find(
                (clickUser) => clickUser === userName,
              ) ? (
                <AiFillDislike />
              ) : (
                <AiOutlineDislike />
              )}
            </div>
          </div>
          <div className="amount">
            <div className="down">{nowPostingEleObj.down.amount}</div>
          </div>
        </div>
      </div>
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
      <div className="comment_input">
        <textarea
          className="comment_input_box"
          style={{ resize: 'none' }}
          ref={commentContent}
        />
        <div
          className="comment_post_btn"
          onClick={() =>
            comm.doUploadComment(
              nowPostingEleObj,
              board_type,
              post_id,
              commentContent,
              userName,
              dispatch,
            )
          }
        >
          <RiMailSendLine />
        </div>
      </div>
    </St_post>
  );
}
