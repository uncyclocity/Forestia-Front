import Board_title from '../../styles/board_title';
import { AiOutlineCloud, AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai';
import St_crud from '../../styles/pages/board/St_crud';
import { useDispatch, useReducerState } from '../_context';
import { useEffect, useRef, useState } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../src/animationController';
import instance from '../api/instance';
import moment from 'moment';
import getData from '../../src/getData';

export default function Posting() {
  const dispatch = useDispatch();
  const state = useReducerState();

  const [selBoard, setSelBoard] = useState('free');
  const [board, setBoard] = useState(state.freeBoard);
  const [boardLen, setBoardLen] = useState(state.freeBoard.length);

  const title = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    mountAnimation(dispatch, 'posting');
  }, [dispatch]);

  const switchToFree = () => {
    setSelBoard('free');
    setBoard(state.freeBoard);
    setBoardLen(state.freeBoard.length);
  };

  const switchToPhoto = () => {
    setSelBoard('photo');
    setBoard(state.photoBoard);
    setBoardLen(state.photoBoard.length);
  };

  const postCreate = () => {
    const id = boardLen > 0 ? parseInt(board[boardLen - 1].id) + 1 : 0;

    instance({
      method: 'POST',
      url: '/api/post_posting/uploadPost',
      data: {
        boardType: selBoard,
        id,
        author: '백괴',
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        title: title.current.value,
        content: content.current.value,
        comments: [],
      },
    }).then(async () => {
      await getData(dispatch);
      unmountAnimation(
        0,
        dispatch,
        `/board/post?board_type=${selBoard}&post_id=${id}`,
      );
    });
  };

  return (
    <St_crud>
      <Board_title backURL="/home">
        <div className="icon">
          <AiOutlineEdit />
        </div>
        <div className="title_name">포스팅</div>
      </Board_title>
      <div className="content_input">
        <div className="free_photo_btn_area">
          {selBoard === 'free' && (
            <div className="free_photo_btn">
              <div className="free_btn_act">
                <AiOutlineCloud />
                <div className="board_name">자게</div>
              </div>
              <div className="photo_btn" onClick={switchToPhoto}>
                <AiOutlineCamera />
                <div className="board_name">짤게</div>
              </div>
            </div>
          )}
          {selBoard === 'photo' && (
            <div className="free_photo_btn">
              <div className="free_btn" onClick={switchToFree}>
                <AiOutlineCloud />
                <div className="board_name">자게</div>
              </div>
              <div className="photo_btn_act">
                <AiOutlineCamera />
                <div className="board_name">짤게</div>
              </div>
            </div>
          )}
        </div>
        <input
          type="text"
          className="content_title_input_box"
          placeholder="제목을 입력하세요"
          ref={title}
        />
        <hr className="title_content_line" align="left" />
        <textarea
          className="content_input_box"
          style={{ resize: 'none' }}
          placeholder="내용을 입력하세요"
          ref={content}
        />
        <div className="content_post_btn" onClick={() => postCreate()}>
          <div className="post_text">업로드</div>
        </div>
      </div>
    </St_crud>
  );
}
