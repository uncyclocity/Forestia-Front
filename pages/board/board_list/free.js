import BoardTitle from '../../../src/common/boardTitle';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import styled from 'styled-components';
import InFreeListBoardTitle from '../../../src/board/list.free/pageEle/inFreeListBoardTitle';
import FreeListPostingList from '../../../src/board/list.free/pageEle/freeListPostingList';
import PageBtn from '../../../src/board/list.free/pageEle/pageBtn';
import instance from '../../../src/common/instance';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

const ListStyle = styled.div`
  .content_list {
    ul {
      padding-left: 0;
      li {
        list-style-type: none;
        margin-top: 10px;

        a {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid #e9ecef;

          .name_and_commamount {
            display: flex;
            flex-direction: row;
            .posting_name {
              margin-right: 5px;
            }

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
          }

          .posting_author {
            margin-left: auto;
            width: 100px;
            border-left: 1px solid #e9ecef;
            font-size: 14px;
            display: block;
            overflow-x: hidden;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
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

export default function Free({ freeBoard, page, freeLen }) {
  const dispatch = useDispatch();
  const [nowPage, setNowPage] = useState(page);
  const [nowList, setNowList] = useState(freeBoard);

  const changeList = useCallback(async () => {
    const free_res = await instance.get(
      `/api/get_posting/viewFree?page=${nowPage}`,
    );
    const freeBoard = await free_res.data;
    setNowList(freeBoard);
  }, [nowPage]);

  useEffect(() => {
    mountAnimation(dispatch, 'free');
  }, [dispatch]);

  useEffect(() => {
    changeList();
  }, [changeList, nowPage]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <ListStyle>
          <BoardTitle backURL="/home">
            <InFreeListBoardTitle />
          </BoardTitle>
          <FreeListPostingList page={nowPage} freeBoard={nowList} />
          <PageBtn freeLen={freeLen} page={nowPage} setNowPage={setNowPage} />
        </ListStyle>
      </BoxStyles>
    </FourAnimationedBox>
  );
}

Free.getInitialProps = async () => {
  const free_res = await instance.get(`/api/get_posting/viewFree?page=1`);
  const freeBoard = await free_res.data;
  const freelen_res = await instance.get(`/api/get_posting/viewfreeLen`);
  const freeLen = await freelen_res.data;
  const page = 1;
  return { freeBoard, page, freeLen };
};
