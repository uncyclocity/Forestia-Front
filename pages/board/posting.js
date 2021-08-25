import Board_title from '../../styles/board_title';
import { AiOutlineCloud, AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai';
import St_posting from '../../styles/pages/board/St_posting';
import { useDispatch, useReducerState } from '../_context';
import { useEffect, useRef, useState } from 'react';
import { mountAnimation } from '../../fixed/AnimationController';
import axios from 'axios';

export default function Post() {
  const dispatch = useDispatch();
  const state = useReducerState();

  const [selBoard, setSelBoard] = useState('free');
  const [boardLen, setBoardLen] = useState(null);

  const title = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    mountAnimation(dispatch, 'posting');
  }, [dispatch]);

  const postPost = async () => {
    if (selBoard === 'free') {
      setBoardLen(state.freeBoard.length);
    } else {
      setBoardLen(state.photoBoard.length);
    }

    const res = await axios('http://localhost:3000/api/uploadPost', {
      boadType: selBoard,
      id: boardLen,
      author: '백괴',
      date: Date.now(),
      title: title.current.value,
      content: content.current.value,
      comments: [],
    });

    console.log(res.data);

    unmountAnimation(
      0,
      dispatch,
      `/board/post?board=${selBoard}&post_id=${BoardLen}`,
      `/board/${selBoard}/${BoardLen}`,
    );
  };

  return (
    <St_posting>
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
              <div className="photo_btn" onClick={() => setSelBoard('photo')}>
                <AiOutlineCamera />
                <div className="board_name">짤게</div>
              </div>
            </div>
          )}
          {selBoard === 'photo' && (
            <div className="free_photo_btn">
              <div className="free_btn" onClick={() => setSelBoard('free')}>
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
        <div className="content_post_btn" onClick={postPost}>
          <div className="post_text">업로드</div>
        </div>
      </div>
    </St_posting>
  );
}
