import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { AiOutlineCloud } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../../_context';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Box from '../../../styles/box';
import { BoxLrAnimation, BoxUdAnimation } from '../../../styles/animation';
import { mountAnimation } from '../../../fixed/AnimationController';

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .comment_content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Comment() {
  const router = useRouter();
  const { post_title, comment } = router.query;

  const state = useReducerState();
  const nowPage = state.nowPage;
  const animation = state.animation;

  const dispatch = useDispatch();

  const [Animation, setAnimation] = useState(null);

  useEffect(() => {
    if (nowPage === '/free') {
      setAnimation(BoxLrAnimation);
    } else {
      setAnimation(BoxUdAnimation);
    }
    mountAnimation(dispatch, '/free');
  }, [dispatch, comment]);

  return (
    <Animation animation={animation}>
      <Box>
        <Styles>
          <Board_title>
            <div className="icon">
              <AiOutlineCloud />
            </div>
            {post_title}
          </Board_title>
          <div className="comment_content">{comment}</div>
        </Styles>
      </Box>
    </Animation>
  );
}
