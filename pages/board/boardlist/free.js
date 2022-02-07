import { useEffect } from 'react';
import { useDispatch } from '../../../components/Contexts/context';
import { doPosting } from '../../../utils/doApi';
import FreeListTemplate from '../../../components/Templates/FreeListTemplate';
import Head from 'next/head';

export default function Free({ freeBoard, page, freeLen }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'free',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <meta property="og:title" content="포레스티아 자게" />
        <meta property="og:description" content="자유롭게 글을 올려주세요 :)" />
      </Head>
      <FreeListTemplate freeLen={freeLen} page={page} nowList={freeBoard} />
    </>
  );
}

Free.getInitialProps = async (ctx) => {
  const page = ctx.query.page || 1;
  const freeBoard = await doPosting.get.list(page, 'free');
  const freeLen = await doPosting.get.length('free');
  return { freeBoard, page, freeLen };
};
