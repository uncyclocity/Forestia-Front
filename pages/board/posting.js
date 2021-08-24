import Board_title from '../../styles/board_title';
import { AiOutlineCloud, AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import St_posting from '../../styles/pages/board/St_posting';
import { useDispatch } from '../_context';
import { useEffect, useState } from 'react';
import { mountAnimation } from '../../fixed/AnimationController';

export default function Post() {
  const dispatch = useDispatch();

  const [selBoard, setSelBoard] = useState('free');

  useEffect(() => {
    mountAnimation(dispatch, 'posting');
  }, [dispatch]);

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
        />
        <hr className="title_content_line" align="left" />
        <textarea
          className="content_input_box"
          style={{ resize: 'none' }}
          placeholder="내용을 입력하세요"
        />
        <div className="content_post_btn">
          <div className="post_text">업로드</div>
        </div>
      </div>
    </St_posting>
  );
}
