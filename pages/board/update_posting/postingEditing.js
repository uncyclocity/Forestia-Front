import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import InEditPostingBoardTitle from '../../../src/board/update_posting.editing/pageEle/InEditPostingBoardTitle';
import FreePhotoSign from '../../../src/board/update_posting.editing/pageEle/freePhotoSign';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import PostingEditContentInput from '../../../src/board/update_posting.editing/pageEle/postingEditContentInput';
import styled from 'styled-components';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function PostingEditing() {
  const dispatch = useDispatch();
  const { board_type, id } = useReducerState().nowPostingEleObj;

  useEffect(() => {
    mountAnimation(dispatch, 'editing');
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [dispatch]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle
          backURL={`/board/posting?board_type=${board_type}&post_id=${id}`}
        >
          <InEditPostingBoardTitle />
        </BoardTitle>
        <FreePhotoSign />
        <PostingEditContentInput />
      </BoxStyles>
    </FourAnimationedBox>
  );
}
