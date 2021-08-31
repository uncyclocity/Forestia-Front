import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../_context';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';
import { useEffect, useRef } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../../fixed/AnimationController';
import St_post from '../../../styles/pages/board/St_post';
import moment from 'moment';
import instance from '../../api/instance';
import getData from '../../../fixed/getData';

const postPageOn = {
  type: 'postpage_switcher',
  isPostPage: true,
};

const postPageOff = {
  type: 'postpage_switcher',
  isPostPage: false,
};

const getBoardObj = (state, boardType) => {
  switch (boardType) {
    case 'free':
      return state.freeBoard;
    case 'photo':
      return state.photoBoard;
    default:
      throw new Error(
        '유효하지 않은 게시판입니다. board/post/index.js에서 board_type 쿼리 값을 확인하세요',
      );
  }
};

const getPostIndex = (boardAllArr, post_id) => {
  return boardAllArr.findIndex((data) => data.id === post_id);
};

export default function Post() {
  const state = useReducerState();
  const router = useRouter();

  const dispatch = useDispatch();

  const { board_type, post_id } = router.query;

  const user = state.user;

  const boardAllArr = getBoardObj(state, board_type);

  const postIndexNum = getPostIndex(boardAllArr, post_id);

  const nowPostObj = boardAllArr[postIndexNum];

  const editData = {
    boardType: board_type,
    id: nowPostObj.id,
    title: nowPostObj.title,
    content: nowPostObj.content,
  };

  const commentContent = useRef(null);

  useEffect(() => {
    mountAnimation(dispatch, board_type);
    dispatch(postPageOn);
    return () => {
      dispatch(postPageOff);
    };
  }, [board_type, dispatch]);

  const doUploadComment = () => {
    instance({
      method: 'POST',
      url: '/api/post_comment/uploadComment',
      data: {
        boardType: board_type,
        postid: post_id,
        commentid: nowPostObj.comments.length,
        author: '백괴',
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        content: commentContent.current.value,
      },
    }).then(async () => {
      commentContent.current.value = '';
      await getData(dispatch);
    });
  };

  const doDeleteComment = (comment_id) => {
    if (confirm('정말로 삭제하시겠습니까')) {
      unmountAnimation(
        0,
        dispatch,
        `/board/commDeleting?boardType=${board_type}&post_id=${post_id}&comment_id=${comment_id}`,
      );
    }
  };

  return (
    <St_post>
      <Board_title backURL={`/board/${board_type}`} editData={editData}>
        <div className="icon">
          {board_type === 'free' && <AiOutlineCloud />}
          {board_type === 'photo' && <AiOutlineCamera />}
        </div>
        <div className="title_name">{nowPostObj.title}</div>
        <div className="author_and_date">
          <div className="author">{nowPostObj.author}</div>
          <div className="date">
            <div className="date_icon">
              <BiTime />
            </div>
            {nowPostObj.date}
          </div>
        </div>
      </Board_title>
      <div className="post_content">{nowPostObj.content}</div>
      <div className="comment_list">
        <div className="comment_amount">
          <div>댓글</div>
          <div className="amount">{nowPostObj.comments.length}</div>
        </div>
        <ul>
          {nowPostObj.comments.map((comment, index) => {
            return (
              <li key={index}>
                <div className="comment_author_and_date">
                  <div className="cand_author">{comment.author}</div>
                  <div className="cand_date">{comment.date}</div>
                  {user === '백괴' && (
                    <>
                      <div className="cand_edit_und_del">수정</div>
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
                  <a>{comment.content}</a>
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
        <div className="comment_post_btn" onClick={doUploadComment}>
          <RiMailSendLine />
        </div>
      </div>
    </St_post>
  );
}
