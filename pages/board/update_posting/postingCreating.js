import BoardTitle from '../../../src/common/boardTitle';
import { useEffect, useState } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import InCreatePostingBoardTitle from '../../../src/board.update_posting.creating/pageEle/InCreatePostingBoardTitle';
import FreePhotoSwitch from '../../../src/board.update_posting.creating/pageEle/freePhotoSwitch';
import PostingContentInput from '../../../src/board.update_posting.creating/pageEle/postingContentInput';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingCreating() {
  const dispatch = useDispatch();
  const [selBoard, setSelBoard] = useState('free');

  useEffect(() => {
    mountAnimation(dispatch, 'posting');
  }, [dispatch]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle backURL="/home">
          <InCreatePostingBoardTitle />
        </BoardTitle>
        <FreePhotoSwitch selBoard={selBoard} setSelBoard={setSelBoard} />
        <PostingContentInput selBoard={selBoard} />
      </BoxStyles>
    </FourAnimationedBox>
  );
}
