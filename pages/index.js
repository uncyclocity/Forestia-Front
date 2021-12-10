import { useEffect } from 'react';
import { useDispatch } from '../src/context';
import { doPosting } from '../src/doApi';
import HomeTemplate from '../components/Templates/HomeTemplate';
import Head from 'next/head';

export default function Home({ freeBoard, photoBoard }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'index',
    });
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>It&#39;s Forestia</title>
        <meta name="description" content="인덱스 페이지입니다." />
      </Head>
      <HomeTemplate freeBoard={freeBoard} photoBoard={photoBoard} />
    </>
  );
}

export const getStaticProps = async () => {
  const freeBoard = await doPosting.get.top3('free');
  const photoBoard = await doPosting.get.top3('photo');
  return { props: { freeBoard, photoBoard }, revalidate: 20 };
};
