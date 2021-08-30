import Board_title from '../../styles/board_title';
import { AiOutlineCloud, AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai';
import St_posting from '../../styles/pages/board/St_posting';
import { useDispatch } from '../_context';
import { useEffect, useRef } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../fixed/AnimationController';
import instance from '../api/api';
import getData from '../../fixed/getData';
import { useRouter } from 'next/router';

export default function Editing() {
  const router = useRouter();

  const { boardType, id, author, date, title, content, comments } =
    router.query;

  const dispatch = useDispatch();

  const newTitle = useRef(null);
  const newContent = useRef(null);

  useEffect(() => {
    mountAnimation(dispatch, 'editing');
    newTitle.current.value = title;
    newContent.current.value = content;
  }, [content, dispatch, title]);

  const postCreate = () => {
    instance({
      method: 'POST',
      url: '/api/editPost',
      data: {
        boardType,
        id,
        author,
        date,
        title: newTitle.current.value,
        content: newContent.current.value,
        comments,
      },
    }).then(async () => {
      await getData(dispatch);
      unmountAnimation(
        0,
        dispatch,
        `/board/post?board=${boardType}&post_id=${id}`,
      );
    });
  };

  return (
    <St_posting>
      <Board_title backURL={`/board/post?board=${boardType}&post_id=${id}`}>
        <div className="icon">
          <AiOutlineEdit />
        </div>
        <div className="title_name">포스트 수정</div>
      </Board_title>
      <div className="content_input">
        <div className="board_sign_area">
          {boardType === 'free' && (
            <div className="board_sign">
              <AiOutlineCloud />
              <div className="board_name">자게</div>
            </div>
          )}
          {boardType === 'photo' && (
            <div className="board_sign">
              <AiOutlineCamera />
              <div className="board_name">짤게</div>
            </div>
          )}
        </div>
        <input
          type="text"
          className="content_title_input_box"
          placeholder="제목을 입력하세요"
          ref={newTitle}
        />
        <hr className="title_content_line" align="left" />
        <textarea
          className="content_input_box"
          style={{ resize: 'none' }}
          placeholder="내용을 입력하세요"
          ref={newContent}
        />
        <div className="content_post_btn" onClick={() => postCreate()}>
          <div className="post_text">수정</div>
        </div>
      </div>
    </St_posting>
  );
}
