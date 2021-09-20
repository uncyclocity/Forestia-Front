import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import styled from 'styled-components';
import { BtnComment } from '../../../../components/Atoms/BtnCommentPost';
import { useDispatch, useReducerState } from '../../../common/context';
import postCntSwitcher from '../../../common/postCntSwitcher';
import { getPosting, postComm } from '../../../doApi/doApi';

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

const UpdateNowPostingEleObj = async (
  nowPostingEleObj,
  setNowPostingEleObj,
  dispatch,
) => {
  postCntSwitcher(dispatch, true);
  const getPostingEle = await getPosting.doGetNowPostingEleObj(
    nowPostingEleObj.board_type,
    nowPostingEleObj.id,
  );
  const nowPostingEleObjUpdated = {
    ...getPostingEle,
    board_type: nowPostingEleObj.board_type,
  };
  setNowPostingEleObj(nowPostingEleObjUpdated);
  postCntSwitcher(dispatch, false);
};

export default function CommentInput({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  const dispatch = useDispatch();
  const state = useReducerState();
  const [comment, setComment] = useState('');
  const userName = state.userName;
  const postCnt = state.postCnt;

  return (
    <CommInputAreaStyle>
      <CommTextareaStyle>
        <textarea
          style={{ resize: 'none' }}
          className="commTextarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </CommTextareaStyle>
      <div
        onClick={async () => {
          if (!postCnt) {
            if (comment) {
              postCntSwitcher(dispatch, true);
              await postComm.doPostCreate(nowPostingEleObj, comment, userName);
              await UpdateNowPostingEleObj(
                nowPostingEleObj,
                setNowPostingEleObj,
                dispatch,
              );
              postCntSwitcher(dispatch, false);
            } else {
              alert('댓글을 입력하세요');
            }
          }
        }}
      >
        <BtnComment>
          <IoIosSend />
        </BtnComment>
      </div>
    </CommInputAreaStyle>
  );
}
