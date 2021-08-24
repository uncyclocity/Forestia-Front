import Board_title from '../../styles/board_title';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import St_posting from '../../styles/pages/board/St_posting';
import { useDispatch, useReducerState } from '../_context';
import { useEffect } from 'react';
import {
  mountAnimation,
  unmountAnimation,
} from '../../fixed/AnimationController';

export default function Post() {
  const dispatch = useDispatch();
  const nowPage = useReducerState().nowPage;

  useEffect(() => {
    mountAnimation(dispatch, 'free');
    dispatch({
      type: 'change_posting_state',
    });
    return () => {
      dispatch({
        type: 'change_posting_state',
      });
    };
  }, [dispatch]);

  return (
    <St_posting>
      <Board_title>
        <div className="free_photo_btn_area">
          {nowPage === 'free' && (
            <div className="free_photo_btn">
              <div className="free_btn_act">
                <AiOutlineCloud />
                <div className="board_name">자게</div>
              </div>
              <div
                className="photo_btn"
                onClick={() => mountAnimation(dispatch, 'photo')}
              >
                <AiOutlineCamera />
                <div className="board_name">짤게</div>
              </div>
            </div>
          )}
          {nowPage === 'photo' && (
            <div className="free_photo_btn">
              <div
                className="free_btn"
                onClick={() => mountAnimation(dispatch, 'free')}
              >
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
        <div className="title_name">포스팅</div>
      </Board_title>
      <div className="content_input">
        <input
          type="text"
          className="content_title_input_box"
          placeholder="제목을 입력하세요"
        />
        <hr className="title_content_line" align="left" />
        <textarea
          className="content_input_box"
          style={{ resize: 'none' }}
          placeholder="내용을 입력하세요"
        />
        <div className="content_post_btn">
          <RiMailSendLine />
        </div>
      </div>
    </St_posting>
  );
}
