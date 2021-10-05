import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/context';
import { getPosting } from '../../../src/doApi';
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
    const photoBoard = await getPosting.doGetForList(nowPageCnt, 'photo');
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
  const photoBoard = await getPosting.doGetForList(page, 'photo');
  const photoLen = await getPosting.doGetLength('photo');
  return { photoBoard, page, photoLen };
};
