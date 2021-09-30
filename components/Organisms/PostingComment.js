import PostingCommentInput from '../MoleCules/PostingCommentInput';
import PostingCommentList from '../MoleCules/PostingCommentList';

export default function PostingComment({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  return (
    <>
      <PostingCommentList
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
      />
      <PostingCommentInput
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
      />
    </>
  );
}
