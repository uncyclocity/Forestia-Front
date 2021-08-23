import Board_title from '../../../styles/board_title';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import St_posting from '../../../styles/pages/board/St_posting';
import { useDispatch } from '../_context';
import { useEffect, useState } from 'react';

export default function Post() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'posting');
  }, [dispatch]);

  const [selectedBoard, setSelBoard] = useState('free');

  return (
    <St_posting>
      <Board_title>
        <div className="icon">
          {selectedBoard === 'free' && <AiOutlineCloud />}
          {selectedBoard === 'comuin' && <AiOutlineCamera />}
        </div>
        <div className="title_name">글쓰기</div>
      </Board_title>
      <div className="content_input">
        <textarea className="comment_input_box" style={{ resize: 'none' }} />
        <div className="content_post_btn">
          <RiMailSendLine />
        </div>
      </div>
    </St_posting>
  );
}
