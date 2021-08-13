import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../_context';
import { AiOutlineCloud } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';
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
import PostAndComment from '../../../styles/PostAndComment';

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
  }, [dispatch, id]);

  return (
    <BoxAnimation
      animation={animation}
      sw1={box_slide_up}
      sw2={box_empty}
      sw3={box_slide_down}
      sw4={box_zero_opacity}
    >
      <Box>
        <PostAndComment>
          <Board_title>
            <div className="icon">
              <AiOutlineCloud />
            </div>
            <div className="title_name">{nowPost.title}</div>
            <div className="author_and_date">
              <div className="author">{nowPost.author}</div>
              <div className="date">
                <div className="date_icon">
                  <BiTime />
                </div>
                {nowPost.date}
              </div>
            </div>
          </Board_title>
          <div className="post_content">{nowPost.content}</div>
          <div className="comment_list">
            <div className="comment_amount">
              댓글&nbsp;·&nbsp;
              <div className="amount">{nowPost.comments.length}</div>
            </div>
            <ul>
              {nowPost.comments.map((comment, index) => {
                return (
                  <li key={index}>
                    <div className="comment_author_and_date">
                      <div className="cand_author">{comment.author}</div>
                      <div className="cand_date">{comment.date}</div>
                    </div>
                    <div className="comment_content">
                      <a>{comment.content}</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="comment_input">
            <textarea
              className="comment_input_box"
              style={{ resize: 'none' }}
            />
            <div className="comment_post_btn">
              <RiMailSendLine />
            </div>
          </div>
        </PostAndComment>
      </Box>
    </BoxAnimation>
  );
}
