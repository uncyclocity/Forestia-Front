import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { AiOutlineCloud } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../../_context';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Box from '../../../styles/box';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_left,
  box_slide_right,
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
  const nowPage = state.nowPage;
  const animation = state.animation;

  const dispatch = useDispatch();

  const [animationSW, setAnimationSW] = useState({
    sw1: box_zero_opacity,
    sw2: box_zero_opacity,
    sw3: box_zero_opacity,
    sw4: box_zero_opacity,
  });

  useEffect(() => {
    if (nowPage === '/free') {
      setAnimationSW({
        sw1: box_slide_left,
        sw2: box_empty,
        sw3: box_slide_right,
        sw4: box_zero_opacity,
      });
    } else {
      setAnimationSW({
        sw1: box_slide_up,
        sw2: box_empty,
        sw3: box_slide_down,
        sw4: box_zero_opacity,
      });
    }
    mountAnimation(dispatch, '/free');
  }, [dispatch, comment, nowPage]);

  return (
    <BoxAnimation
      animation={animation}
      sw1={animationSW.sw1}
      sw2={animationSW.sw2}
      sw3={animationSW.sw3}
      sw4={animationSW.sw4}
    >
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
    </BoxAnimation>
  );
}
