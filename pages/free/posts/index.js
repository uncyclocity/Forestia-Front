import Link from 'next/link';
import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../_context';
import { AiOutlineCloud } from 'react-icons/ai';
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

  .post_content {
    border-bottom: 1px solid #e9ecef;
  }

  .comment_list {
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

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const state = useReducerState();
  const freeBoard = state.freeBoard;
  const nowPost = freeBoard[id];
  const animation = state.animation;

  const dispatch = useDispatch();

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
            {nowPost.title}
          </Board_title>
          {nowPost.content}
          <div className="comment_list">
            <ul>
              {nowPost.comments.map((comment, index) => {
                return (
                  <li key={index}>
                    <Link
                      href="/free/[post_id]/[comment]"
                      as={`/free/${id}/${comment.id}`}
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
