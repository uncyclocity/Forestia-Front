import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import styled from 'styled-components';
import InFreeListBoardTitle from '../../../src/board/list.free/pageEle/inFreeListBoardTitle';
import FreeListPostingList from '../../../src/board/list.free/pageEle/freeListPostingList';
import { useRouter } from 'next/router';
import PageBtn from '../../../src/board/list.free/pageEle/pageBtn';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
  max-height: 680px;
`;

const ListStyle = styled.div`
  .content_list {
    li {
      transform: translateX(-6.5%);
      list-style-type: none;
      margin-top: 10px;

      a {
        cursor: pointer;
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

    .list_empty {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 20px 0;
      color: #babfc7;

      .empty_icon {
        width: 80px;
        height: 80px;
        font-size: 80px;
      }

      .empty_text {
        margin-top: 20px;
        font-size: 20px;
      }
    }
  }
`;

export default function Free() {
  const router = useRouter();
  const { page } = router.query;

  const dispatch = useDispatch();

  const freeBoard = useReducerState().freeBoard;

  useEffect(() => {
    mountAnimation(dispatch, 'free');
  }, [dispatch]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <ListStyle>
          <BoardTitle backURL="/home">
            <InFreeListBoardTitle />
          </BoardTitle>
          <FreeListPostingList page={page} freeBoard={freeBoard} />
          <PageBtn freeBoard={freeBoard} page={page} />
        </ListStyle>
      </BoxStyles>
    </FourAnimationedBox>
  );
}
