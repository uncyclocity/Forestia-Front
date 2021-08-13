import Link from 'next/link';
import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../_context';
import { AiOutlineCamera } from 'react-icons/ai';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Box from '../../../styles/box';
import {
  BoxAnimation,
  box_empty,
  box_slide_up,
  box_slide_down,
  box_zero_opacity,
} from '../../../styles/animation';
import { mountAnimation } from '../../../fixed/AnimationController';

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

const BeforeSetAnimation = styled.div`
  opacity: 0;
`;

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const state = useReducerState();
  const photoBoard = state.photoBoard;
  const nowPost = photoBoard[id];
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
            {nowPost.title}
          </Board_title>
          {nowPost.content}
          <div className="content_list">
            <ul>
              {nowPost.comments.map((comment, index) => {
                return (
                  <li key={index}>
                    <Link
                      href="/comuin/[id]/[comment]"
                      as={`/comuin/${id}/${comment.id}`}
                    >
                      <a>{comment.content}</a>
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
