import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import { getPosting } from '../../../src/doApi/doApi';
import postCntSwitcher from '../../../src/common/postCntSwitcher';
import FreeListTemplate from '../../../components/Templates/FreeListTemplate';

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
    <FreeListTemplate
      freeLen={freeLen}
      nowPage={nowPage}
      nowList={nowList}
      setNowPage={setNowPage}
    />
  );
}

Free.getInitialProps = async () => {
  const page = 1;
  const freeBoard = await getPosting.doGetForList(page, 'free');
  const freeLen = await getPosting.doGetLength('free');
  return { freeBoard, page, freeLen };
};
