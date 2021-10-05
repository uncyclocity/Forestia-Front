import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/context';
import { getPosting } from '../../../src/doApi';
import FreeListTemplate from '../../../components/Templates/FreeListTemplate';
import Head from 'next/head';

export default function Free({ freeBoard, page, freeLen }) {
  const dispatch = useDispatch();
  const [nowPageCnt, setNowPageCnt] = useState(page);
  const [nowList, setNowList] = useState(freeBoard);

  const changeList = useCallback(async () => {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });
    const freeBoard = await getPosting.doGetForList(nowPageCnt, 'free');
    setNowList(freeBoard);
    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  }, [dispatch, nowPageCnt]);

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'free',
    });
  }, [dispatch]);

  useEffect(() => {
    changeList();
  }, [changeList]);

  return (
    <>
      <Head>
        <title>자게</title>
      </Head>
      <FreeListTemplate
        freeLen={freeLen}
        nowPageCnt={nowPageCnt}
        nowList={nowList}
        setNowPageCnt={setNowPageCnt}
      />
    </>
  );
}

Free.getInitialProps = async () => {
  const page = 1;
  const freeBoard = await getPosting.doGetForList(page, 'free');
  const freeLen = await getPosting.doGetLength('free');
  return { freeBoard, page, freeLen };
};
