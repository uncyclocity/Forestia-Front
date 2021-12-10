import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/context';
import { doPosting } from '../../../src/doApi';
import PhotoListTemplate from '../../../components/Templates/PhotoListTemplate';
import Head from 'next/head';

export default function Photo({ photoBoard, page, photoLen }) {
  const dispatch = useDispatch();
  const [nowPageCnt, setNowPageCnt] = useState(page);
  const [nowList, setNowList] = useState(photoBoard);

  const changeList = useCallback(async () => {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });
    const photoBoard = await doPosting.get.list(nowPageCnt, 'photo');
    setNowList(photoBoard);
    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  }, [dispatch, nowPageCnt]);

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'photo',
    });
  }, [dispatch]);

  useEffect(() => {
    changeList();
  }, [changeList]);

  return (
    <>
      <Head>
        <title>짤게</title>
      </Head>
      <PhotoListTemplate
        photoLen={photoLen}
        nowPageCnt={nowPageCnt}
        nowList={nowList}
        setNowPageCnt={setNowPageCnt}
      />
    </>
  );
}

Photo.getInitialProps = async () => {
  const page = 1;
  const photoBoard = await doPosting.get.list(page, 'photo');
  const photoLen = await doPosting.get.length('photo');
  return { props: { photoBoard, page, photoLen } };
};
