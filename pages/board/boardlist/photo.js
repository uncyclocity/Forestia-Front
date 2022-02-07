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
        <meta property="og:title" content="포레스티아 자게" />
        <meta
          property="og:description"
          content="사진이 주 목적인 글을 올려주세요 :)"
        />
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
