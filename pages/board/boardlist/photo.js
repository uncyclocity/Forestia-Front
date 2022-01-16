import { useEffect } from 'react';
import { useDispatch } from '../../../components/Contexts/context';
import { doPosting } from '../../../utils/doApi';
import PhotoListTemplate from '../../../components/Templates/PhotoListTemplate';
import Head from 'next/head';

export default function Photo({ photoBoard, page, photoLen }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'photo',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>짤게</title>
        <meta name="description" content="짤게 페이지입니다." />
      </Head>
      <PhotoListTemplate photoLen={photoLen} page={page} nowList={photoBoard} />
    </>
  );
}

Photo.getInitialProps = async (ctx) => {
  const page = ctx.query.page || 1;
  const photoBoard = await doPosting.get.list(page, 'photo');
  const photoLen = await doPosting.get.length('photo');
  return { photoBoard, page, photoLen };
};
