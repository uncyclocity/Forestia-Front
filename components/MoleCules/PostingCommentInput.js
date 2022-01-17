import { useState } from 'react';
import styled from 'styled-components';
import { BtnCommentPost } from '../Atoms/Button/BtnCommentPost';
import IptComment from '../Atoms/Input/IptComment';
import { useDispatch, useReducerState } from '../Contexts/context';
import { postComment } from '../../utils/updateFunc/comment/postComment';

const CommInputAreaStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const CommTextareaStyle = styled.div`
  .commTextarea {
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
`;

export default function PostingCommentInput({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  const dispatch = useDispatch();
  const state = useReducerState();
  const [comment, setComment] = useState('');
  const userObj = state.user;
  const postCnt = state.postCnt;

  return (
    <CommInputAreaStyle>
      <CommTextareaStyle>
        <IptComment
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && e.shiftKey == false) {
              e.preventDefault();
              userObj.userId
                ? postComment({
                    dispatch,
                    postCnt,
                    comment,
                    setComment,
                    nowPostingEleObj,
                    setNowPostingEleObj,
                    userObj,
                  })
                : alert('로그인이 필요합니다.');
            }
          }}
          value={comment}
        />
      </CommTextareaStyle>
      <div
        onClick={() =>
          userObj.userId
            ? postComment({
                dispatch,
                postCnt,
                comment,
                setComment,
                nowPostingEleObj,
                setNowPostingEleObj,
                userObj,
              })
            : alert('로그인이 필요합니다.')
        }
      >
        <BtnCommentPost />
      </div>
    </CommInputAreaStyle>
  );
}
