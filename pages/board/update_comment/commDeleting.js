import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import InCommDeletingBoardTitle from '../../../src/board/update_comment.deleting/pageEle/inCommDeletingBoardTitle';
import CommDeleteSign from '../../../src/board/update_comment.deleting/pageEle/commDeleteSign';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import letsDeleteComm from '../../../src/board/update_comment.deleting/etcFunc/letsDeleteComm';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function CommDeleting() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'commDeleting');
    letsDeleteComm(dispatch, router.query);
  }, [dispatch, router.query]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle>
          <InCommDeletingBoardTitle />
        </BoardTitle>
        <CommDeleteSign />
      </BoxStyles>
    </FourAnimationedBox>
  );
}
