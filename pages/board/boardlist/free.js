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
        <title>자게</title>
        <meta name="description" content="자게 페이지입니다." />
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
