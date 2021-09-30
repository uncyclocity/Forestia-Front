import PostingContentView from '../MoleCules/PostingContentView';
import PostingImageView from '../MoleCules/PostingImageView';
import PostingUpAndDown from '../MoleCules/PostingUpAndDown';

export default function PostingContentAndUpDown({
  nowPostingEleObj,
  setNowPostingEleObj,
}) {
  return (
    <>
      <PostingContentView nowPostingEleObj={nowPostingEleObj} />
      <PostingImageView nowPostingEleObj={nowPostingEleObj} />
      <PostingUpAndDown
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
      />
    </>
  );
}
