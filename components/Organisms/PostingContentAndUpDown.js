import PostingContentView from '../MoleCules/PostingContentView';
import PostingImageView from '../MoleCules/PostingImageView';
import PostingUpAndDown from '../MoleCules/PostingUpAndDown';
import { useReducerState } from '../../src/context';

export default function PostingContentAndUpDown({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  const userId = useReducerState().user.userId;
  return (
    <>
      <PostingContentView nowPostingEleObj={nowPostingEleObj} />
      <PostingImageView nowPostingEleObj={nowPostingEleObj} />
      {userId && <PostingUpAndDown
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
      />}
    </>
  );
}
