import BoardTitle from '../../../src/common/boardTitle';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import styled from 'styled-components';
import InFreeListBoardTitle from '../../../src/board/list.free/pageEle/inFreeListBoardTitle';
import FreeListPostingList from '../../../src/board/list.free/pageEle/freeListPostingList';
import PageBtn from '../../../src/board/list.free/pageEle/pageBtn';
import { getPosting } from '../../../src/doApi/doApi';
import postCntSwitcher from '../../../src/common/postCntSwitcher';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function Free({ freeBoard, page, freeLen }) {
  const dispatch = useDispatch();
  const [nowPage, setNowPage] = useState(page);
  const [nowList, setNowList] = useState(freeBoard);

  const changeList = useCallback(async () => {
    postCntSwitcher(dispatch, true);
    const freeBoard = await getPosting.doGetForList(nowPage, 'free');
    setNowList(freeBoard);
    postCntSwitcher(dispatch, false);
  }, [dispatch, nowPage]);

  useEffect(() => {
    mountAnimation(dispatch, 'free');
  }, [dispatch]);

  useEffect(() => {
    changeList();
  }, [changeList, nowPage]);

  return (
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle backURL="/home">
          <InFreeListBoardTitle />
        </BoardTitle>
        <FreeListPostingList page={nowPage} freeBoard={nowList} />
        {freeLen > 0 && (
          <PageBtn freeLen={freeLen} page={nowPage} setNowPage={setNowPage} />
        )}
      </BoxStyles>
    </FourAnimationedBox>
  );
}

Free.getInitialProps = async () => {
  const page = 1;
  const freeBoard = await getPosting.doGetForList(page, 'free');
  const freeLen = await getPosting.doGetLength('free');
  return { freeBoard, page, freeLen };
};
