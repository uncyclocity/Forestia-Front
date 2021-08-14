import { AiOutlineCamera } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { useDispatch, useReducerState } from '../_context';
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
import {
  mountAnimation,
  unmountAnimation,
} from '../../fixed/AnimationController';

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .content_list {
    transform: translateX(-6.5%);
    li {
      list-style-type: none;
      margin-top: 10px;

      a {
        display: flex;
        flex-direction: row;

        .comment_amount {
          display: flex;
          justify-content: center;
          color: #20c997;

          .comment_icon {
            transform: translateY(3px);
            font-size: 13px;
          }

          .amount {
            transform: translateX(2px);
            font-size: 15px;
          }
        }

        &:hover {
          transition: 0.15s all ease-in;
          color: #20c997;
        }

        &:not(:hover) {
          transition: 0.15s all ease-in;
          color: #525252;
        }
      }
    }
  }
`;

export default function Comuin() {
  const state = useReducerState();
  const dispatch = useDispatch();

  const animation = state.animation;
  const photoBoard = state.photoBoard;

  useEffect(() => {
    mountAnimation(dispatch, 'comuin');
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
            <div className="title_name">짤게</div>
          </Board_title>
          <div className="content_list">
            <ul>
              {photoBoard &&
                photoBoard.map((post, index) => {
                  return (
                    <li key={index}>
                      <div
                        onClick={() =>
                          unmountAnimation(
                            0,
                            dispatch,
                            `/board/post/?board=comuin&post_id=${post.id}`,
                            `/board/comuin/${post.id}`,
                          )
                        }
                      >
                        <a>
                          {post.title}&nbsp;
                          <div className="comment_amount">
                            <div className="comment_icon">
                              <FaRegCommentAlt />
                            </div>
                            <div className="amount">{post.comments.length}</div>
                          </div>
                        </a>
                      </div>
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
