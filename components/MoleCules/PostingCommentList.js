import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../Contexts/context';
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
import { putComment } from '../../utils/updateFunc/comment/putComment';
import { putReply } from '../../utils/updateFunc/reply/putReply';
import { postReply } from '../../utils/updateFunc/reply/postReply';
import IcoReply from '../Atoms/Icon/IcoReply';
import getCommentLen from '../../utils/getCommentLen';

const CommListAreaStyle = styled.div`
  margin-bottom: 5px;

  ul {
    padding-left: 0;
    li {
      list-style-type: none;
      margin: 10px 0;
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

  .comm_edit_reply_area {
    display: flex;
    flex-direction: row;
  }
`;

const ReplyAreaStyle = styled.div`
  display: flex;
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
  const [editReplyObj, setEditReplyObj] = useState(false);
  const [replyObj, setReplyObj] = useState(false);
  const commentAmount = getCommentLen(nowPostingEleObj);

  return (
    <CommListAreaStyle>
      <CommAmountAreaStyle>
        <TxtComment />
        <TxtCommentAmount amount={commentAmount} />
      </CommAmountAreaStyle>
      {commentAmount > 0 && <LinCommentBetweenAmountAndList />}
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
                      onClick={() => {
                        if (!postCnt) {
                          if (confirm('정말로 삭제하시겠습니까')) {
                            Router.push(
                              `/board/update-comment/delete?boardtype=${nowPostingEleObj.boardType}&postid=${nowPostingEleObj.id}&commentid=${comment.id}&authorid=${comment.authorId}`,
                            );
                          }
                        }
                      }}
                    >
                      <BtnCommentEditDel text="삭제" />
                    </div>
                  </>
                )}
                {replyObj.commId === comment.id ? (
                  <div onClick={() => setReplyObj(false)}>
                    <BtnCommentEditDel text="답글 취소" />
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      setReplyObj({ commId: comment.id, content: '' })
                    }
                  >
                    <BtnCommentEditDel text="답글" />
                  </div>
                )}
              </CommInfoAndBtnAreaStyle>
              <CommContentAreaStyle>
                {editCommObj.id === comment.id ? (
                  <div className="comm_edit_reply_area">
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
                          putComment({
                            dispatch,
                            nowPostingEleObj,
                            setNowPostingEleObj,
                            setEditCommObj,
                            editCommObj,
                            postCnt,
                            authorId: comment.authorId,
                          });
                        }
                      }}
                      value={editCommObj.content}
                      width={570}
                    />
                    <div
                      onClick={() =>
                        putComment({
                          dispatch,
                          nowPostingEleObj,
                          setNowPostingEleObj,
                          setEditCommObj,
                          editCommObj,
                          postCnt,
                          authorId: comment.authorId,
                        })
                      }
                    >
                      <BtnCommentPost />
                    </div>
                  </div>
                ) : (
                  <TxtCommentContent content={comment.content} />
                )}
                <ul>
                  {comment.replys.map((reply, index) => {
                    return (
                      <li key={index}>
                        <ReplyAreaStyle>
                          <IcoReply />
                          <div>
                            <CommInfoAndBtnAreaStyle>
                              <TxtCommentAuthor author={reply.author} />
                              <TxtCommentDate date={reply.date} />
                              {userId === reply.authorId && (
                                <>
                                  {editReplyObj.id === reply.id &&
                                  editReplyObj.commId === comment.id ? (
                                    <div onClick={() => setEditReplyObj(false)}>
                                      <BtnCommentEditDel text="수정취소" />
                                    </div>
                                  ) : (
                                    <div
                                      onClick={() =>
                                        setEditReplyObj({
                                          id: reply.id,
                                          commId: comment.id,
                                          content: reply.content,
                                        })
                                      }
                                    >
                                      <BtnCommentEditDel text="수정" />
                                    </div>
                                  )}
                                  <div
                                    onClick={() => {
                                      if (!postCnt) {
                                        if (
                                          confirm('정말로 삭제하시겠습니까')
                                        ) {
                                          Router.push(
                                            `/board/update-reply/delete?boardtype=${nowPostingEleObj.boardType}&postid=${nowPostingEleObj.id}&commentid=${comment.id}&authorid=${reply.authorId}&replyid=${reply.id}`,
                                          );
                                        }
                                      }
                                    }}
                                  >
                                    <BtnCommentEditDel text="삭제" />
                                  </div>
                                </>
                              )}
                            </CommInfoAndBtnAreaStyle>
                            <CommContentAreaStyle>
                              {editReplyObj.id === reply.id &&
                              editReplyObj.commId === comment.id ? (
                                <div className="comm_edit_reply_area">
                                  <IptComment
                                    onChange={(e) =>
                                      !postCnt &&
                                      setEditReplyObj({
                                        ...editReplyObj,
                                        content: e.target.value,
                                      })
                                    }
                                    onKeyDown={(e) => {
                                      if (
                                        e.keyCode === 13 &&
                                        e.shiftKey == false
                                      ) {
                                        e.preventDefault();
                                        putReply({
                                          dispatch,
                                          nowPostingEleObj,
                                          setNowPostingEleObj,
                                          setEditReplyObj,
                                          editReplyObj,
                                          postCnt,
                                          commentId: comment.id,
                                          authorId: reply.authorId,
                                          replyId: reply.id,
                                        });
                                      }
                                    }}
                                    value={editReplyObj.content}
                                    width={537}
                                  />
                                  <div
                                    onClick={() =>
                                      putReply({
                                        dispatch,
                                        nowPostingEleObj,
                                        setNowPostingEleObj,
                                        setEditReplyObj,
                                        editReplyObj,
                                        postCnt,
                                        commentId: comment.id,
                                        authorId: reply.authorId,
                                        replyId: reply.id,
                                      })
                                    }
                                  >
                                    <BtnCommentPost />
                                  </div>
                                </div>
                              ) : (
                                <TxtCommentContent content={reply.content} />
                              )}
                            </CommContentAreaStyle>
                          </div>
                        </ReplyAreaStyle>
                      </li>
                    );
                  })}
                </ul>
                {replyObj.commId === comment.id && (
                  <div className="comm_edit_reply_area">
                    <IcoReply />
                    <IptComment
                      onChange={(e) =>
                        !postCnt &&
                        setReplyObj({
                          ...replyObj,
                          content: e.target.value,
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.keyCode === 13 && e.shiftKey == false) {
                          e.preventDefault();
                          postReply({
                            dispatch,
                            nowPostingEleObj,
                            setNowPostingEleObj,
                            setReplyObj,
                            replyObj,
                            postCnt,
                            comment,
                          });
                        }
                      }}
                      value={replyObj.content}
                      width={537}
                    />
                    <div
                      onClick={() =>
                        postReply({
                          dispatch,
                          nowPostingEleObj,
                          setNowPostingEleObj,
                          setReplyObj,
                          replyObj,
                          postCnt,
                          comment,
                        })
                      }
                    >
                      <BtnCommentPost />
                    </div>
                  </div>
                )}
              </CommContentAreaStyle>
            </li>
          );
        })}
      </ul>
    </CommListAreaStyle>
  );
}
