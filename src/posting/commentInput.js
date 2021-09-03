import { useRef } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { useDispatch, useReducerState } from '../_context';
import { comm } from './doApi';

export default function CommentInput({ nowPostingEleObj }) {
  const commentContent = useRef(null);
  const dispatch = useDispatch();
  const userName = useReducerState().userName;

  return (
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
            nowPostingEleObj.board_type,
            nowPostingEleObj.id,
            commentContent,
            userName,
            dispatch,
          )
        }
      >
        <RiMailSendLine />
      </div>
    </div>
  );
}
