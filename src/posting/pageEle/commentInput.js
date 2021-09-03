import { useRef } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../context';
import { comm } from '../../doApi/doApi';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  .comment_input_box {
    width: 570px;
    height: 50px;

    margin-right: 15px;

    border: none;
    border-radius: 5px;

    font-size: 15px;

    font-family: inherit;

    border: 1px solid #e9ecef;
    color: #525252;

    &:focus {
      outline: none;
    }
  }

  .comment_post_btn {
    background: #20c997;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;

    &:hover {
      transition: 0.25s all ease-in;
      box-shadow: 0px 0px 15px #36deac;
      cursor: pointer;
    }

    &:not(:hover) {
      transition: 0.25s all ease-in;
      box-shadow: 0px 0px 15px #9aefd6;
    }
  
`;

export default function CommentInput({ nowPostingEleObj }) {
  const commentContent = useRef(null);
  const dispatch = useDispatch();
  const userName = useReducerState().userName;

  return (
    <Styles>
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
    </Styles>
  );
}
