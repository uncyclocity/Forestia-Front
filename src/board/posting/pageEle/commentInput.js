import { useRef } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../../common/context';
import instance from '../../../common/instance';
import { comm } from '../../../doApi/doApi';

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

const CommPostBtnStyle = styled.div`
  .commPostBtn {
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
  }
`;

const setNPEO = async (nowPostingEleObj, setNowPostingEleObj) => {
  const getPostingEle_res = await instance.get(
    `/api/get_posting/getPostingEle?id=${nowPostingEleObj.id}&board_type=${nowPostingEleObj.board_type}`,
  );
  const nowPostingEleObjRaw = {
    ...getPostingEle_res.data,
    board_type: nowPostingEleObj.board_type,
  };
  setNowPostingEleObj(nowPostingEleObjRaw);
};

export default function CommentInput({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  const commentContent = useRef(null);
  const dispatch = useDispatch();
  const state = useReducerState();
  const userName = state.userName;
  const postCnt = state.postCnt;

  return (
    <CommInputAreaStyle>
      <CommTextareaStyle>
        <textarea
          style={{ resize: 'none' }}
          className="commTextarea"
          ref={commentContent}
        />
      </CommTextareaStyle>
      <CommPostBtnStyle>
        <div
          className="commPostBtn"
          onClick={async () => {
            if (!postCnt) {
              if (commentContent.current.value) {
                await comm.doUploadComment(
                  nowPostingEleObj,
                  commentContent,
                  userName,
                  dispatch,
                );
                setNPEO(nowPostingEleObj, setNowPostingEleObj);
              } else {
                alert('댓글을 입력하세요');
              }
            }
          }}
        >
          <RiMailSendLine />
        </div>
      </CommPostBtnStyle>
    </CommInputAreaStyle>
  );
}
