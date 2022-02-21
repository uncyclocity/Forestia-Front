import PostingCommentInput from '../MoleCules/PostingCommentInput';
import PostingCommentList from '../MoleCules/PostingCommentList';

export default function PostingComment({
  nowPostingEleObj,
  setNowPostingEleObj,
  commentAuthorArr,
}) {
  return (
    <>
      <PostingCommentList
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
        commentAuthorArr={commentAuthorArr}
      />
      <PostingCommentInput
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
      />
    </>
  );
}
