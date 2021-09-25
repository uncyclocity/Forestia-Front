import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../../common/context';
import postCntSwitcher from '../../../common/postCntSwitcher';
import { getPosting, postComm } from '../../../doApi/doApi';
import gotoCommDelPage from '../etcFunc/gotoCommDelPage';
import { BtnCommentPost } from '../../../../components/Atoms/BtnCommentPost';
import TxtComment from '../../../../components/Atoms/TxtComment';
import TxtCommentAmount from '../../../../components/Atoms/TxtCommentAmount';
import TxtCommentAuthor from '../../../../components/Atoms/TxtCommentAuthor';
import TxtCommentDate from '../../../../components/Atoms/TxtCommentDate';
import BtnCommentEditDel from '../../../../components/Atoms/BtnCommentEditDel';
import TxtCommentContent from '../../../../components/Atoms/TxtCommentContent';
import IptComment from '../../../../components/Atoms/IptComment';

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
  border-bottom: 1px solid #e9ecef;
`;

const CommInfoAndBtnAreaStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const CommContentAreaStyle = styled.div`
  font-size: 15px;

  .comm_edit_area {
    display: flex;
    flex-direction: row;

    .comm_edit_input_box {
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

export default function CommentList({ nowPostingEleObj, setNowPostingEleObj }) {
  const state = useReducerState();
  const userName = state.userName;
  const postCnt = state.postCnt;
  const dispatch = useDispatch();
  const [editCommObj, setEditCommObj] = useState(false);

  return (
    <CommListAreaStyle>
      <CommAmountAreaStyle>
        <TxtComment />
        <TxtCommentAmount amount={nowPostingEleObj.comments.length} />
      </CommAmountAreaStyle>
      <ul>
        {nowPostingEleObj.comments.map((comment, index) => {
          return (
            <li key={index}>
              <CommInfoAndBtnAreaStyle>
                <TxtCommentAuthor author={comment.author} />
                <TxtCommentDate date={comment.date} />
                {userName === '백괴' && (
                  <>
                    {editCommObj.id === comment.id ? (
                      <div onClick={() => setEditCommObj(false)}>
                        <BtnCommentEditDel text="수정취소" />
                      </div>
                    ) : (
                      <div
                        onClick={() =>
                          setEditCommObj({
                            id: comment.id,
                            content: comment.content,
                          })
                        }
                      >
                        <BtnCommentEditDel text="수정" />
                      </div>
                    )}

                    <div
                      onClick={() =>
                        gotoCommDelPage(nowPostingEleObj, comment.id, dispatch)
                      }
                    >
                      <BtnCommentEditDel text="삭제" />
                    </div>
                  </>
                )}
              </CommInfoAndBtnAreaStyle>
              <CommContentAreaStyle>
                {editCommObj.id === comment.id ? (
                  <div className="comm_edit_area">
                    <IptComment
                      onChange={(e) =>
                        !postCnt &&
                        setEditCommObj({
                          ...editCommObj,
                          content: e.target.value,
                        })
                      }
                      value={editCommObj.content}
                    />
                    <div
                      onClick={async () => {
                        if (!postCnt) {
                          postCntSwitcher(dispatch, true);
                          await postComm.doPostEdit(
                            nowPostingEleObj,
                            editCommObj,
                            setEditCommObj,
                          );
                          await UpdateNowPostingEleObj(
                            nowPostingEleObj,
                            setNowPostingEleObj,
                            dispatch,
                          );
                          postCntSwitcher(dispatch, false);
                        }
                      }}
                    >
                      <BtnCommentPost />
                    </div>
                  </div>
                ) : (
                  <TxtCommentContent content={comment.content} />
                )}
              </CommContentAreaStyle>
            </li>
          );
        })}
      </ul>
    </CommListAreaStyle>
  );
}
