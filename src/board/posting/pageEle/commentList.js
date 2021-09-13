import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../../common/context';
import instance from '../../../common/instance';
import { comm } from '../../../doApi/doApi';
import gotoCommDelPage from '../etcFunc/gotoCommDelPage';

const CommListAreaStyle = styled.div`
  margin-bottom: 5px;

  ul {
    padding-left: 0;
    li {
      list-style-type: none;
      margin-bottom: 15px;
    }
  }
`;

const CommAmountAreaStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;

  font-size: 17px;
  font-weight: bold;
  color: #828c99;

  border-bottom: 1px solid #e9ecef;

  .amount {
    margin-left: 7px;
    color: #20c997;
  }
`;

const CommInfoAndBtnAreaStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;

  .cand_author {
    margin-right: 10px;
    font-weight: bold;
    font-size: 15px;
  }

  .cand_date {
    margin-right: 10px;
    position: relative;
    top: 1px;
    color: #828c99;
    font-size: 14px;
  }

  .cand_edit_und_del {
    color: #20c997;
    font-size: 14px;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 7px;
    }
  }
`;

const CommContentAreaStyle = styled.div`
  font-size: 15px;

  .comm_edit_area {
    display: flex;
    flex-direction: row;

    .comm_edit_input_box {
      width: 570px;
      height: 50px;

      margin-right: 15px;

      border: none;
      border-radius: 5px;

      font-family: inherit;
      font-size: 15px;

      border: 1px solid #e9ecef;
      color: #525252;

      &:focus {
        outline: none;
      }
    }

    .comm_edit_post_btn {
      background: #20c997;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 25px;

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

export default function CommentList({ nowPostingEleObj, setNowPostingEleObj }) {
  const state = useReducerState();
  const userName = state.userName;
  const postCnt = state.postCnt;
  const dispatch = useDispatch();
  const [editCommObj, setEditCommObj] = useState(false);

  return (
    <CommListAreaStyle>
      <CommAmountAreaStyle>
        <div>댓글</div>
        <div className="amount">{nowPostingEleObj.comments.length}</div>
      </CommAmountAreaStyle>
      <ul>
        {nowPostingEleObj.comments.map((comment, index) => {
          return (
            <li key={index}>
              <CommInfoAndBtnAreaStyle>
                <div className="cand_author">{comment.author}</div>
                <div className="cand_date">{comment.date}</div>
                {userName === '백괴' && (
                  <>
                    {editCommObj.id === comment.id ? (
                      <div
                        className="cand_edit_und_del"
                        onClick={() => setEditCommObj(false)}
                      >
                        수정취소
                      </div>
                    ) : (
                      <div
                        className="cand_edit_und_del"
                        onClick={() =>
                          setEditCommObj({
                            id: comment.id,
                            content: comment.content,
                          })
                        }
                      >
                        수정
                      </div>
                    )}

                    <div
                      className="cand_edit_und_del"
                      onClick={() =>
                        gotoCommDelPage(nowPostingEleObj, comment.id, dispatch)
                      }
                    >
                      삭제
                    </div>
                  </>
                )}
              </CommInfoAndBtnAreaStyle>
              <CommContentAreaStyle>
                {editCommObj.id === comment.id ? (
                  <div className="comm_edit_area">
                    <textarea
                      style={{ resize: 'none' }}
                      value={editCommObj.content}
                      onChange={(e) =>
                        !postCnt &&
                        setEditCommObj({
                          ...editCommObj,
                          content: e.target.value,
                        })
                      }
                      className="comm_edit_input_box"
                    />
                    <div
                      className="comm_edit_post_btn"
                      onClick={async () => {
                        if (postCnt) {
                          await comm.doEditComment(
                            nowPostingEleObj,
                            editCommObj,
                            setEditCommObj,
                            dispatch,
                          );
                          setNPEO(nowPostingEleObj, setNowPostingEleObj);
                        }
                      }}
                    >
                      <FiSend />
                    </div>
                  </div>
                ) : (
                  <a>{comment.content}</a>
                )}
              </CommContentAreaStyle>
            </li>
          );
        })}
      </ul>
    </CommListAreaStyle>
  );
}
