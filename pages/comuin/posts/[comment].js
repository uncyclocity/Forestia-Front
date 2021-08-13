import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { AiOutlineCamera } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../../_context';
import styled from 'styled-components';
import { useEffect } from 'react';
import Box from '../../../styles/box';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../../../styles/animation';
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
  const animation = state.animation;

  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, '/comuin');
  }, [dispatch]);

  return (
    <BoxAnimation
      animation={animation}
      sw1={box_slide_up}
      sw2={box_empty}
      sw3={box_slide_down}
      sw4={box_zero_opacity}
    >
      <Box>
        <Styles>
          <Board_title>
            <div className="icon">
              <AiOutlineCamera />
            </div>
            {post_title}
          </Board_title>
          <div className="comment_content">{comment}</div>
        </Styles>
      </Box>
    </BoxAnimation>
  );
}
