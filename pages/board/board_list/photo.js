import BoardTitle from '../../../src/common/boardTitle';
import { useEffect } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import InPhotoListBoardTitle from '../../../src/board.board_list.photo/pageEle/inPhotoListBoardTitle';
import PhotoListPostingList from '../../../src/board.board_list.photo/pageEle/photoListPostingList';

const ListStyle = styled.div`
  padding: 20px 30px 5px 30px;

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

export default function Photo() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'photo');
  }, [dispatch]);

  return (
    <FourAnimationedBox>
      <ListStyle>
        <BoardTitle backURL="/home">
          <InPhotoListBoardTitle />
        </BoardTitle>
        <PhotoListPostingList />
      </ListStyle>
    </FourAnimationedBox>
  );
}
