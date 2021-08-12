import { AiOutlineCloud } from 'react-icons/ai';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../_context';
import Link from 'next/link';
import Board_title from '../../styles/board_title';
import Box from '../../styles/box';
import {
  BoxAnimation,
  box_empty,
  box_slide_down,
  box_slide_up,
  box_zero_opacity,
} from '../../styles/animation';
import { useEffect } from 'react';
import { mountAnimation } from '../../fixed/AnimationController';

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .content_list {
    transform: translateX(-6.5%);
    li {
      list-style-type: none;
      &:not(:first-child) {
        margin-top: 10px;
      }
      &:hover {
        color: #20c997;
      }
    }
  }
`;

export default function Free() {
  const state = useReducerState();
  const dispatch = useDispatch();

  const animation = state.animation;
  const freeBoard = state.freeBoard;

  useEffect(() => {
    mountAnimation(dispatch, '/free');
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
              <AiOutlineCloud />
            </div>
            자게
          </Board_title>
          <div className="content_list">
            <ul>
              {freeBoard &&
                freeBoard.map((post, index) => {
                  return (
                    <li key={index}>
                      <Link
                        as={`/free/${post.id}`}
                        href={`/free/posts?id=${post.id}`}
                      >
                        <a>{post.title}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Styles>
      </Box>
    </BoxAnimation>
  );
}
