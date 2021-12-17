import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../Contexts/context';
import { doComment, doPosting } from '../../utils/doApi';
import { BtnCommentPost } from '../Atoms/Button/BtnCommentPost';
import TxtComment from '../Atoms/Text/TxtComment';
import TxtCommentAmount from '../Atoms/Text/TxtCommentAmount';
import TxtCommentAuthor from '../Atoms/Text/TxtCommentAuthor';
import TxtCommentDate from '../Atoms/Text/TxtCommentDate';
import BtnCommentEditDel from '../Atoms/Button/BtnCommentEditDel';
import TxtCommentContent from '../Atoms/Text/TxtCommentContent';
import IptComment from '../Atoms/Input/IptComment';
import Router from 'next/router';
import LinCommentBetweenAmountAndList from '../Atoms/Line/LinCommentBetweenAmountAndList';

const gotoCommDelPage = (nowPostingEleObj, commentId) => {
  if (confirm('정말로 삭제하시겠습니까')) {
    Router.push(
      `/board/update-comment/delete?boardtype=${nowPostingEleObj.boardType}&postid=${nowPostingEleObj.id}&commentid=${commentId}`,
    );
  }
};

const UpdateNowPostingEleObj = async (
  nowPostingEleObj,
  setNowPostingEleObj,
  dispatch,
) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });
  const getPostingEle = await doPosting.get.ele(
    nowPostingEleObj.boardType,
    nowPostingEleObj.id,
  );
  const nowPostingEleObjUpdated = {
    ...getPostingEle,
    boardType: nowPostingEleObj.boardType,
  };
  setNowPostingEleObj(nowPostingEleObjUpdated);
  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};

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

export default function PostingCommentList({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  const state = useReducerState();
  const userId = state.user.userId;
  const postCnt = state.postCnt;
  const dispatch = useDispatch();
  const [editCommObj, setEditCommObj] = useState(false);

  const editComm = async () => {
    if (!postCnt) {
      dispatch({
        type: 'postcnt_switcher',
        sw: true,
      });
      await doComment.put(nowPostingEleObj, editCommObj, setEditCommObj);
      await UpdateNowPostingEleObj(
        nowPostingEleObj,
        setNowPostingEleObj,
        dispatch,
      );
      dispatch({
        type: 'postcnt_switcher',
        sw: false,
      });
    }
  };

  return (
    <CommListAreaStyle>
      <CommAmountAreaStyle>
        <TxtComment />
        <TxtCommentAmount amount={nowPostingEleObj.comments.length} />
      </CommAmountAreaStyle>
      {nowPostingEleObj.comments.length > 0 && (
        <LinCommentBetweenAmountAndList />
      )}
      <ul>
        {nowPostingEleObj.comments.map((comment, index) => {
          return (
            <li key={index}>
              <CommInfoAndBtnAreaStyle>
                <TxtCommentAuthor author={comment.author} />
                <TxtCommentDate date={comment.date} />
                {userId === comment.authorId && (
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
                        gotoCommDelPage(nowPostingEleObj, comment.id)
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
                      onKeyDown={(e) => {
                        if (e.keyCode === 13 && e.shiftKey == false) {
                          e.preventDefault();
                          editComm();
                        }
                      }}
                      value={editCommObj.content}
                    />
                    <div onClick={editComm}>
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
