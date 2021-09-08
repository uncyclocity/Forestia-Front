import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import { posting } from '../../../src/doApi/doApi';
import InDeletePostingBoardTitle from '../../../src/board/update_posting.deleting/pageEle/inDeletePostingBoardTitle';
import DeleteSign from '../../../src/board/update_posting.deleting/pageEle/deleteSign';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingDeleting() {
  const dispatch = useDispatch();
  const { board_type, id, imagesUrl } = useReducerState().nowPostingEleObj;

  useEffect(() => {
    mountAnimation(dispatch, 'deleting');
    posting.doDeletePosting(board_type, id, dispatch);
    posting.doDeleteImage(board_type, imagesUrl, dispatch);
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [board_type, dispatch, id, imagesUrl]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle>
          <InDeletePostingBoardTitle />
        </BoardTitle>
        <DeleteSign />
      </BoxStyles>
    </FourAnimationedBox>
  );
}
