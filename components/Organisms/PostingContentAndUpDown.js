import PostingContentView from '../MoleCules/PostingContentView';
import PostingImageView from '../MoleCules/PostingImageView';
import PostingUpAndDown from '../MoleCules/PostingUpAndDown';
import styled from 'styled-components';

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
