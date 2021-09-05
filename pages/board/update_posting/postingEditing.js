import BoardTitle from '../../../src/common/boardTitle';
import { AiOutlineCloud, AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai';
import St_crud from '../../../styles/pages/board/St_crud';
import { useEffect, useRef } from 'react';
import getBoardData from '../../../src/common/getBoardData';
import { useDispatch, useReducerState } from '../../../src/common/context';
import {
  mountAnimation,
  unmountAnimation,
} from '../../../src/common/animationController';
import instance from '../../../src/common/instance';

export default function PostingEditing() {
  const dispatch = useDispatch();
  const { board_type, id, title, content } = useReducerState().nowPostingEleObj;

  const newTitle = useRef(null);
  const newContent = useRef(null);

  useEffect(() => {
    mountAnimation(dispatch, 'editing');
    newTitle.current.value = title;
    newContent.current.value = content;
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [content, dispatch, title]);

  const postCreate = () => {
    instance({
      method: 'POST',
      url: '/api/post_posting/editPost',
      data: {
        board_type,
        id,
        title: newTitle.current.value,
        content: newContent.current.value,
      },
    }).then(async () => {
      await getBoardData(dispatch);
      unmountAnimation(
        0,
        dispatch,
        `/board/posting?board_type=${board_type}&post_id=${id}`,
      );
    });
  };

  return (
    <St_crud>
      <BoardTitle
        backURL={`/board/posting?board_type=${board_type}&post_id=${id}`}
      >
        <div className="icon">
          <AiOutlineEdit />
        </div>
        <div className="title_name">포스트 수정</div>
      </BoardTitle>
      <div className="content_input">
        <div className="board_sign_area">
          {board_type === 'free' && (
            <div className="board_sign">
              <AiOutlineCloud />
              <div className="board_name">자게</div>
            </div>
          )}
          {board_type === 'photo' && (
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
    </St_crud>
  );
}
