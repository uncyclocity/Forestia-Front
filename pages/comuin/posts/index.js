import Link from 'next/link';
import { useRouter } from 'next/router';
import Board_title from '../../../styles/board_title';
import { useDispatch, useReducerState } from '../../_context';
import { AiOutlineCamera } from 'react-icons/ai';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Box from '../../../styles/box';
import { BoxLrAnimation, BoxUdAnimation } from '../../../styles/animation';
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
  const nowPage = state.nowPage;
  const nowPost = photoBoard[id];
  const animation = state.animation;

  const [Animation, setAnimation] = useState(BeforeSetAnimation);

  const dispatch = useDispatch();

  useEffect(() => {
    if (nowPage === '/comuin') {
      setAnimation(BoxLrAnimation);
    } else {
      setAnimation(BoxUdAnimation);
    }
    mountAnimation(dispatch, '/comuin');
  }, [dispatch]);

  return (
    <Animation animation={animation}>
      <Box>
        <Styles>
          <Board_title>
            <div className="icon">
              <AiOutlineCamera />
            </div>
            짤게/{nowPost.title}
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
    </Animation>
  );
}
