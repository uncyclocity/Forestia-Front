import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../_context';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';
import { useEffect, useRef } from 'react';
import { mountAnimation } from '../../../fixed/AnimationController';
import St_post from '../../../styles/pages/board/St_post';
import moment from 'moment';
import instance from '../../api/api';
import getData from '../../../fixed/getData';

export default function Post() {
  const router = useRouter();
  const { board, post_id } = router.query;

  const state = useReducerState();

  const boardType = useRef(null);

  switch (board) {
    case 'free':
      boardType.current = state.freeBoard;
      break;
    case 'photo':
      boardType.current = state.photoBoard;
      break;
    default:
      throw new Error('유효하지 않은 게시판입니다. board 쿼리 값을 확인하세요');
  }

  const postIndex = boardType.current.findIndex((data) => data.id === post_id);
  const nowPost = boardType.current[postIndex];

  const editData = {
    boardType: board,
    id: nowPost.id,
    title: nowPost.title,
    content: nowPost.content,
  };

  const content = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, board);
    dispatch({
      type: 'postPageSwitcher',
      isPostPage: true,
    });
    return () => {
      dispatch({
        type: 'postPageSwitcher',
        isPostPage: false,
      });
    };
  }, [dispatch, post_id, boardType, board]);

  const postComment = () => {
    instance({
      method: 'POST',
      url: '/api/uploadComment',
      data: {
        boardType: board,
        postid: post_id,
        commentid: nowPost.comments.length,
        author: '백괴',
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        content: content.current.value,
      },
    }).then(async () => {
      await getData(dispatch);
    });
  };

  return (
    <St_post>
      <Board_title backURL={`/board/${board}`} editData={editData}>
        <div className="icon">
          {board === 'free' && <AiOutlineCloud />}
          {board === 'photo' && <AiOutlineCamera />}
        </div>
        <div className="title_name">{nowPost.title}</div>
        <div className="author_and_date">
          <div className="author">{nowPost.author}</div>
          <div className="date">
            <div className="date_icon">
              <BiTime />
            </div>
            {nowPost.date}
          </div>
        </div>
      </Board_title>
      <div className="post_content">{nowPost.content}</div>
      <div className="comment_list">
        <div className="comment_amount">
          <div>댓글&nbsp;</div>
          <div className="amount">{nowPost.comments.length}</div>
        </div>
        <ul>
          {nowPost.comments.map((comment, index) => {
            return (
              <li key={index}>
                <div className="comment_author_and_date">
                  <div className="cand_author">{comment.author}</div>
                  <div className="cand_date">{comment.date}</div>
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
          ref={content}
        />
        <div className="comment_post_btn" onClick={() => postComment()}>
          <RiMailSendLine />
        </div>
      </div>
    </St_post>
  );
}
