import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import styled from 'styled-components';
import CtnBox from '../../../components/Atoms/Container/CtnBox';
import InCreatePostingBoardTitle from '../../../src/board/update_posting.creating/pageEle/InCreatePostingBoardTitle';
import PostingContentInput from '../../../src/board/update_posting.creating/pageEle/postingContentInput';
import setNowPostingEle from '../../../src/common/setNowPostingEle';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingCreating() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'creating');
    setNowPostingEle(dispatch, {});
  }, [dispatch]);

  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitle backURL="/home">
          <InCreatePostingBoardTitle />
        </BoardTitle>
        <PostingContentInput />
      </BoxStyles>
    </CtnBox>
  );
}
