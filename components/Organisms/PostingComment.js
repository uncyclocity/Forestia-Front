import { useReducerState } from '../Contexts/context';
import PostingCommentInput from '../MoleCules/PostingCommentInput';
import PostingCommentList from '../MoleCules/PostingCommentList';

export default function PostingComment({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  const userName = useReducerState().user.userName;

  return (
    <>
      <PostingCommentList
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
      />
      {userName && (
        <PostingCommentInput
          nowPostingEleObj={nowPostingEleObj}
          setNowPostingEleObj={setNowPostingEleObj}
        />
      )}
    </>
  );
}
