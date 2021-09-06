import BoardTitle from '../../../src/common/boardTitle';
import { useEffect, useRef } from 'react';
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
  const { board_type, id, title, content } = useReducerState().nowPostingEleObj;

  const newTitle = useRef(null);
  const newContent = useRef(null);

  useEffect(() => {
    mountAnimation(dispatch, 'editing');
    newTitle.current.value = title;
    newContent.current.value = content;
    return () => {
      dispatch({ type: 'editpost_data', editData: {} });
    };
  }, [content, dispatch, title]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle
          backURL={`/board/posting?board_type=${board_type}&post_id=${id}`}
        >
          <InEditPostingBoardTitle />
        </BoardTitle>
        <FreePhotoSign board_type={board_type} />
        <PostingEditContentInput
          board_type={board_type}
          id={id}
          newTitle={newTitle}
          newContent={newContent}
        />
      </BoxStyles>
    </FourAnimationedBox>
  );
}
